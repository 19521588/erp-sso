import { ToastService } from "./../../shared/components/toast/toast.service";
import { ModalService } from "./../../shared/components/modal/modal.service";
import { Component, OnInit } from "@angular/core";
import { UserListingService } from "./user-listing.service";

@Component({
  selector: "app-user-listing",
  templateUrl: "./user-listing.component.html",
  styleUrls: ["./user-listing.component.css"],
})
export class UserListingComponent implements OnInit {
  data: any[] = [];
  ispage = 1;
  pageSize = 10;
  lastname = "";
  firstname = "";
  tem = "";
  idUser = "";
  statusToast = "";
  MessToast = "";
  totalPage: number[] = [];
  constructor(
    private userlistingsv: UserListingService,
    private modalsv: ModalService,
    private toastsv: ToastService
  ) {}
  ngOnInit() {
    this.userlistingsv.getUser(this.getUrl()).subscribe((data: any) => {
      this.data = data.content;
      console.log(data);
      for (let i = 0; i < data.totalPages; i++) {
        this.totalPage.push(i);
      }
    });
    console.log(
      "users/pagination?pageNo=" + this.ispage + "&pageSize=" + this.pageSize
    );
  }
  loadApi() {
    return this.userlistingsv.getUser(this.getUrl()).subscribe((data: any) => {
      this.data = data.content;
      this.totalPage.length = 0;

      for (let i = 0; i < data.totalPages; i++) {
        this.totalPage.push(i);
      }
    });
  }
  getUrl() {
    return (
      "users/pagination?pageNo=" + this.ispage + "&pageSize=" + this.pageSize
    );
  }
  next() {
    this.ispage++;
    this.loadApi();
  }

  Prev() {
    if (!(this.ispage === 0)) {
      this.ispage--;
      this.loadApi();
    }
  }
  changesize(e: any) {
    this.pageSize = e.target.value;
    this.ispage = 0;
    this.loadApi();
  }
  changePage(page: number) {
    this.ispage = page;
    this.loadApi();
  }
  openModal(id: string, lastname: string, firstname: string, iduser: string) {
    this.modalsv.open(id);
    this.lastname = lastname;
    this.firstname = firstname;
    this.idUser = iduser;
  }
  openModalAdd(id: string) {
    this.modalsv.open(id);
  }
  openToast(statusToast: string, MessToast: string, timeout = 3000) {
    this.toastsv.open("notifi");
    setTimeout(() => {
      this.closeToast();
    }, timeout);
  }

  closeModal(id: string) {
    this.modalsv.close(id);
  }
  closeToast() {
    this.toastsv.close("notifi");
  }
  deleteuser(id: string) {
    this.userlistingsv.deleteuser(this.idUser).subscribe({
      next: () => {
        this.loadApi();
        this.closeModal(id);
        this.statusToast = "Succeed";
        this.MessToast = "Add user successfully";
        this.openToast(this.statusToast, this.MessToast);
      },
      error: () => {
        this.statusToast = "Faild";
        this.MessToast = "Deactivate user failed";
        this.openToast(this.statusToast, this.MessToast);
      },
    });
  }

  search() {
    if (this.tem.length) {
      this.userlistingsv.searchUser(this.tem).subscribe((dat: any) => {
        this.data = dat;
      });
    } else {
      this.userlistingsv.getUser(this.getUrl()).subscribe((dat: any) => {
        this.data = dat;
      });
    }
  }
}
