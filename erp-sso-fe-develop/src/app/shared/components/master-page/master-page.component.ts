import { Component } from "@angular/core";

@Component({
  selector: "app-master-page",
  templateUrl: "./master-page.component.html",
  styleUrls: ["./master-page.component.css"],
})
export class MasterPageComponent {
  menu = true;

  openMenu() {
    this.menu = !this.menu;
  }
}
