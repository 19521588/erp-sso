import { environment } from "./../../../../environments/environment";

import { Router, ActivatedRoute } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  Validators,
} from "@angular/forms";
import { TranslateService } from "@ngx-translate/core";
import { ErrorMessages as ErrorMessages } from "src/app/shared/components/text-input/error-messages";
import { box } from "tweetnacl";
import { decodeBase64, decodeUTF8, encodeBase64 } from "tweetnacl-util";
import * as nacl from "tweetnacl";
import * as jose from "jose";
import { LoginService } from "../login.service";
import { User } from "../user";

function noSpaceValidator(
  control: AbstractControl
): ValidationErrors | undefined {
  const value: string = control.value;
  if (value.match(/\s/)) {
    return {
      spaces: true,
    };
  }
  return undefined;
}
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  txtusername = "";
  txtpassword = "";
  form: FormGroup;
  returnurl = "";
  publickey = "";
  toDay = new Date();

  constructor(
    private formBuilder: FormBuilder,
    private translate: TranslateService,
    private router: Router,
    private loginservice: LoginService,
    private r: ActivatedRoute
  ) {
    this.form = this.formBuilder.group(
      {
        username: [this.txtusername, [Validators.required, noSpaceValidator]],
        password: [
          this.txtpassword,
          [Validators.required, Validators.minLength(6)],
        ],
      },
      [Validators.required]
    );
    this.returnurl = String(this.r.snapshot.queryParamMap.get("returnURL"));
    this.publickey = String(this.r.snapshot.queryParamMap.get("publickey"));
  }
  get fields() {
    return this.form.controls;
  }
  onSubmit() {
    // do nothing for now
  }
  ngOnInit(): void {
    if (
      localStorage.getItem("authToken") &&
      this.toDay <=
        new Date(
          Number(jose.decodeJwt(String(localStorage.getItem("exp"))).exp) * 1000
        )
    ) {
      if (this.returnurl !== "null" || this.publickey !== "null") {
        if (this.isAllowDomain(this.returnurl)) {
          this.isSso(this.returnurl, this.publickey);
        }
      } else this.router.navigate(["/home"]);
    }
  }
  isAllowDomain(returnUrl: string): boolean {
    for (const domain of environment.allowDomains) {
      if (returnUrl.endsWith(domain)) {
        return true;
      }
    }
    return false;
  }

  isSso(reURL: string, pubKey: string) {
    const encrypted = this.encrypt(
      String(pubKey),
      String(localStorage.getItem("authToken"))
    );
    return (window.location.href =
      reURL +
      "/authen?&ciphertext=" +
      encrypted.ciphertext +
      "&ephemPubKey=" +
      encrypted.ephemPubKey +
      "&nonce=" +
      encrypted.nonce);
  }

  encrypt(receiverPublicKey: string, msgParams: string) {
    const ephemeralKeyPair = box.keyPair();
    const pubKeyUInt8Array = decodeBase64(receiverPublicKey);
    const msgParamsUInt8Array = decodeUTF8(msgParams);
    const nonce = nacl.randomBytes(box.nonceLength);
    const encryptedMessage = box(
      msgParamsUInt8Array,
      nonce,
      pubKeyUInt8Array,
      ephemeralKeyPair.secretKey
    );
    return {
      ciphertext: encodeBase64(encryptedMessage),
      ephemPubKey: encodeBase64(ephemeralKeyPair.publicKey),
      nonce: encodeBase64(nonce),
    };
  }

  passwordFieldErrors: ErrorMessages = {
    required: () => this.translate.instant("password-is-required"),
    minlength: (error) =>
      this.translate.instant("error-password-min-length", error),
  };

  usernameFieldErrors: ErrorMessages = {
    required: () => this.translate.instant("username-is-required"),
    spaces: () => this.translate.instant("error-username-with-space"),
  };
  ischeck = false;
  imgcheck = "/assets/icons/non-checkbox.svg";

  clickcheck() {
    this.ischeck = !this.ischeck;
    if (this.ischeck) this.imgcheck = "/assets/icons/checkbox.svg";
    else this.imgcheck = "/assets/icons/non-checkbox.svg";
  }

  login() {
    this.loginservice.checklogin(this.txtusername, this.txtpassword).subscribe({
      next: (user: User) => {
        localStorage.setItem("exp", user.jwttoken);
        localStorage.setItem("authToken", user.jwttoken);
        if (this.returnurl === "null" || this.publickey === "null") {
          this.router.navigate(["/listing"]);
        } else {
          if (this.isAllowDomain(this.returnurl)) {
            this.isSso(this.returnurl, this.publickey);
          }
        }
      },
      error: (err: any) => {
        if (err.status === 400) {
          window.alert("Sai tài khoản hoặc mật khẩu");
        } else {
          window.alert("Kết nối sever thất bại");
        }
      },
    });
  }

  iserr() {
    if (
      this.form.controls.username.errors ||
      this.form.controls.password.errors
    )
      return true;
    return false;
  }
  forgot() {
    this.router.navigate(["/forgot-password"]);
  }
}
