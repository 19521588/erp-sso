import { User } from "./user";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class LoginService {
  apiurl: string = environment.api;
  private url = this.apiurl + "login";
  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };

  constructor(private httpClient: HttpClient) {}
  checklogin(username: string, password: string) {
    return this.httpClient.post<User>(this.url, {
      password: password,
      username: username,
    });
  }
}
