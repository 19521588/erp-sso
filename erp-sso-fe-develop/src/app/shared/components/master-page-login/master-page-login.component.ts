import { Component } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";

@Component({
  selector: "app-master-page-login",
  templateUrl: "./master-page-login.component.html",
  styleUrls: ["./master-page-login.component.css"],
})
export class MasterPageLoginComponent {
  isForgot = true;
  check = true;
  checkurl = "";
  constructor(private router: Router) {
    router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.checkurl = event.url;
        if (
          event.url === "/forgot-password" ||
          event.url === "/create-newpassword"
        ) {
          if (window.innerWidth < 767) {
            document.body.style.backgroundColor = "white";
            this.isForgot = false;
            console.log(true);
          } else {
            document.body.style.backgroundColor = "#00508C";
            this.isForgot = true;
          }
        } else {
          document.body.style.backgroundColor = "#00508C";
          this.isForgot = true;
        }

        if (event.url.includes("/listing")) {
          this.isForgot = false;
        }
      }
    });
  }

  onResize(e: any) {
    if (
      this.checkurl === "/forgot-password" ||
      this.checkurl === "/create-newpassword"
    ) {
      if (e.target.innerWidth <= 767) {
        document.body.style.backgroundColor = "white";
        this.isForgot = false;
      } else {
        document.body.style.backgroundColor = "#00508C";
        this.isForgot = true;
      }
    } else {
      document.body.style.backgroundColor = "#00508C";
      this.isForgot = true;
    }
    if (!(this.checkurl === "/login")) {
      this.isForgot = false;
      document.body.style.backgroundColor = "white";
    }
  }
}
