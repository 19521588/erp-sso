import { ModalService } from "../../shared/components/modal/modal.service";
import { ListingUserService } from "./listing-user.service";
import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { ToastService } from "src/app/shared/components/toast/toast.service";

@Component({
  selector: "app-listing-user",
  templateUrl: "./listing-user.component.html",
  styleUrls: ["./listing-user.component.css"],
})
export class ListingUserComponent implements OnInit {
  tem = "";
  pagesize = 10;
  ispage = 0;
  url = "";
  user = "";
  data: any;
  idUser = "";
  dataUser: any;
  statusToast = "";
  MessToast = "";
  load = false;
  Componentname = "";
  Componentid = "";
  imgUrl = "/assets/icons/Checkbox.svg";
  totalPage: number[] = [];
  listUser: string[] = [];
  constructor(
    private router: Router,
    private r: ActivatedRoute,
    private lu: ListingUserService,
    private modalsv: ModalService,
    private toastsv: ToastService
  ) {}
  ngOnInit(): void {
    this.lu.getuser(this.getURL()).subscribe((dat) => {
      this.data = dat.content;
      this.Componentname = this.data[0].component.name;
      this.Componentid = this.data[0].component.id;
      for (let i = 0; i < dat.totalPages; i++) {
        this.totalPage.push(i);
      }
      console.log(this.totalPage);
    });

    document.body.style.backgroundColor = "white";
  }

  getURL() {
    return (
      window.location.pathname.split("/")[2] +
      "?pageNo=" +
      this.ispage +
      "&pageSize=" +
      this.pagesize
    );
  }
  loadapi() {
    this.lu.getuser(this.getURL()).subscribe((dat) => {
      this.data = dat.content;
      this.totalPage.length = 0;
      for (let i = 0; i < dat.totalPages; i++) {
        this.totalPage.push(i);
      }
    });
  }
  openModal(id: string, name: string, iduser: string) {
    this.modalsv.open(id);
    this.user = name;
    this.idUser = iduser;
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
    this.load = true;
    this.lu.deleteuser(this.idUser).subscribe({
      next: () => {
        this.loadapi();
        this.load = false;
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
  closemodal(id: string) {
    this.modalsv.close(id);
  }
  getalluser(id: string) {
    this.modalsv.open(id);
    this.lu.getalluser().subscribe((dat: any) => {
      this.dataUser = dat;
    });
  }

  addUserInComponent(idModal: string) {
    console.log();
    for (let i = 0; i < this.listUser.length; i++) {
      this.lu.addUseInComponent(this.Componentid, this.listUser[i]).subscribe({
        next: () => {
          this.loadapi();
          this.closeModal(idModal);
          window.alert("thêm thành công");
        },
        error: () => {
          this.closeModal(idModal);
          window.alert("thêm thất bại");
        },
      });
    }
    console.log(this.dataUser);
    console.log(this.dataUser.content[0].id);
  }

  /* changestatus(status: string, id: string) {
    if (status) {
      this.lu.changestatus("deactivateUser/" + id).subscribe({
        next: () => {
          this.loadapi();
        },
      });
    } else {
      this.lu.changestatus("activateUser/" + id).subscribe({
        next: () => {
          this.loadapi();
        },
      });
    }
  } */
  c() {
    this.statusToast = "Succeed";
    this.MessToast = "Add user successfully";
    this.openToast(this.statusToast, this.MessToast);
  }

  checkCheckBoxvalue(e: any, id: string) {
    if (e.target.checked) {
      this.listUser.push(id);
    } else
      this.listUser.splice(
        this.listUser.findIndex((i) => {
          return i === id;
        }),
        1
      );
  }

  next() {
    this.ispage++;
    this.loadapi();
  }

  Prev() {
    if (!(this.ispage === 0)) {
      this.ispage--;
      this.loadapi();
    }
  }
  changesize(e: any) {
    this.pagesize = e.target.value;
    this.ispage = 0;
    this.loadapi();
  }
  changePage(page: number) {
    this.ispage = page;
    this.loadapi();
  }
  search() {
    if (this.tem.length > 3) {
      this.lu.searchUser(this.tem).subscribe((dat: any) => {
        this.dataUser = dat;
      });
    } else {
      this.lu.getalluser().subscribe((dat: any) => {
        this.dataUser = dat;
      });
    }
  }
}
