import { ListingService } from "./../listing.service";
import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
@Component({
  selector: "app-listing-components",
  templateUrl: "./listing-components.component.html",
  styleUrls: ["./listing-components.component.css"],
})
export class ListingComponentsComponent implements OnInit {
  constructor(private http: HttpClient, private listingsv: ListingService) {}
  data: any;
  ngOnInit(): void {
    document.body.style.backgroundColor = "white";
    /*  this.listingsv.getcomponent().subscribe({
      next: (val) => {
        this.data = [];
        for (let i = 0; i < Math.max(val.length, this.styles.length); i++) {
          this.data[i] = {};
          if (val.length > i) {
            this.data[i] = val[i];
          }
          if (this.styles.length > i) {
            this.data[i] = { ...this.data[i], ...this.styles[i] };
          }
        }
      },
    }); */
    this.listingsv.getcomponent().subscribe((da) => {
      this.data = da;
      console.log(da);
    });
  }

  redi(component: any) {
    window.location.href = "listing/" + component;
  }
}
