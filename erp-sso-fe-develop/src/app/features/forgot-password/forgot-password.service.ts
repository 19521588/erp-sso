import { HttpHeaders, HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class ForgotPasswordService {
  apiurl: string = environment.api;
  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };
  constructor(private http: HttpClient) {}
  checkemail(email: string) {
    return this.http.post(this.apiurl + "forgot", { email: email });
  }
  changepass(token: string, newpass: string) {
    return this.http.post(this.apiurl + "reset", {
      password: newpass,
      resetPasswordToken: token,
    });
  }
}
