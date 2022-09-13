import { Component } from "@angular/core";

@Component({
  selector: "app-profile-user",
  templateUrl: "./profile-user.component.html",
  styleUrls: ["./profile-user.component.css"],
})
export class ProfileUserComponent {
  status = "Deactive";
  isEdit = true;
  edit() {
    this.isEdit = !this.isEdit;
  }
}
