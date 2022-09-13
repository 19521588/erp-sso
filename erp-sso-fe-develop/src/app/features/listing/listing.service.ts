import { Comp } from "./comp";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class ListingService {
  apiurl: string = environment.api;
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
    }),
  };
  createHeader() {
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("authToken") + "",
    });
    return headers;
  }
  constructor(private http: HttpClient) {}
  getcomponent() {
    const header = this.createHeader();
    return this.http.get<Comp[]>(this.apiurl + "component/list", {
      headers: header,
    });
  }
}
