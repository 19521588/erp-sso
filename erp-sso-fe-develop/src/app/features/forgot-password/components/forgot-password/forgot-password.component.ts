import { ForgotPasswordService } from './../../forgot-password.service';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ErrorMessages } from 'src/app/shared/components/text-input/error-messages';
import { TranslateService } from '@ngx-translate/core';

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

function noEmail(control : AbstractControl):ValidationErrors |undefined {
  if (!control.value.includes('@outlook.com.vn')) {
    return {
      noemail:true
    }
  }
  return undefined
}
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  email = ''
  animation= 'animate-none'
  formforgotpassword: FormGroup;
  constructor(private r: Router,
    private f: FormBuilder,
    private trans: TranslateService,
    private forgotPasswordService:ForgotPasswordService) { 
    this.formforgotpassword = f.group({
      e:[this.email,[Validators.required, noSpaceValidator,noEmail]]
    },Validators.required)
  }
  get fields(){
    return this.formforgotpassword.controls;
  }
  back() {
    this.r.navigate(['/login'])  
  }
  ishidden():boolean {
    if (this.formforgotpassword.valid)
      return false
    return true
  }
  log() {
    this.animation='animate-pulse'
    this.forgotPasswordService.checkemail(this.email).subscribe({
      next: () => {
        window.alert("The operation is successful, please check your email to enter the password")
        this.animation='animate-none'
      },
      error:(err)=>{
        this.animation='animate-none'
        if (err.status === 404) {
          window.alert("Email does not exist")
        } else {
          window.alert("công turn off the server")
        }
      },    
    })
  }

  textFieldErrors: ErrorMessages = {
    required: () => this.trans.instant('email-is-required'),
    spaces: () => this.trans.instant('error-email-with-space'),
    noemail:()=> this.trans.instant('Incorrect email format')
  };

}
