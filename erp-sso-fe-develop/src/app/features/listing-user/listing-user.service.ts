import { Userdetail } from "./userdetail";
import { UserComp } from "./usercomp";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class ListingUserService {
  apiurl: string = environment.api;
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
    }),
  };
  constructor(private http: HttpClient) {}
  createHeader() {
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("authToken") + "",
    });
    return headers;
  }

  getuser(id: string) {
    const headers = this.createHeader();
    return this.http.get<UserComp>(
      this.apiurl + "user_component/pagination/" + id,
      {
        headers: headers,
      }
    );
  }
  deleteuser(id: string) {
    const headers = this.createHeader();
    return this.http.delete(this.apiurl + "user_component/" + id, {
      headers: headers,
    });
  }
  getalluser() {
    const headers = this.createHeader();
    return this.http.get<Userdetail[]>(this.apiurl + "users/list/", {
      headers: headers,
    });
  }

  addUseInComponent(componentId: string, userId: string) {
    const headers = this.createHeader();
    return this.http.post(
      this.apiurl + "user_component/",
      {
        componentId: componentId,
        userId: userId,
      },
      {
        headers: headers,
      }
    );
  }

  searchUser(name: string) {
    const headers = this.createHeader();
    return this.http.get(
      this.apiurl + "users/search/{search}/?search=" + name,
      {
        headers: headers,
      }
    );
  }
}
