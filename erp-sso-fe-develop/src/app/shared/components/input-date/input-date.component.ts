import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-input-date",
  templateUrl: "./input-date.component.html",
  styleUrls: ["./input-date.component.css"],
})
export class InputDateComponent implements OnInit {
  @Input() day!: any;
  @Input() mon!: any;
  @Input() year!: any;
  hidden = false;
  touch = true;
  touch1 = true;
  touch2 = true;
  days: any[] = [];
  mons: any[] = [];
  years: any[] = [];
  isMon = 0;
  isDay = 0;
  isYear = 0;
  check = false;
  checkMon = false;
  checkYear = false;
  ngOnInit(): void {
    const d = new Date();
    this.isYear = d.getFullYear();
    this.isDay = d.getDate();
    this.isMon = d.getMonth() + 1;
    for (let i = 1; i <= this.isYear; i++) {
      if (i >= 1900) this.years.push(i);
      if (i <= 12) this.mons.push(i);
      if (i <= 31) this.days.push(i);
    }
    this.isData();
    console.log(this.getdate());
  }
  convString(value: number) {
    if (value < 10) return "0" + value;
    return String(value);
  }
  isData() {
    if (!this.day || !this.mon || !this.year) {
      this.day = "DD";
      this.mon = "MM";
      this.year = "YYYY";
    }
  }
  getdate() {
    return (
      this.convString(this.day) +
      "/" +
      this.convString(this.mon) +
      "/" +
      String(this.year)
    );
  }
  checkDate() {
    if (this.day === "DD" || this.mon === "MM" || this.year === "YYYY") {
      return false;
    }
    return true;
  }
  rex() {
    const reg =
      /^(((0[1-9]|[12]\d|3[01])\/(0[13578]|1[02])\/((19|[2-9]\d)\d{2}))|((0[1-9]|[12]\d|30)\/(0[13456789]|1[012])\/((19|[2-9]\d)\d{2}))|((0[1-9]|1\d|2[0-8])\/02\/((19|[2-9]\d)\d{2}))|(29\/02\/((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|(([1][26]|[2468][048]|[3579][26])00))))$/g;
    const str = new RegExp(reg);
    if (str.test(this.getdate())) {
      if (
        (this.mon > this.isMon && this.isYear === this.year) ||
        (this.mon === this.isMon &&
          this.day > this.isDay &&
          this.isYear === this.year)
      )
        return false;
      return true;
    }
    return false;
  }

  Change(value: any, e: any) {
    if (this.day !== e.target.value) {
      this.touch2 = false;
    }
  }

  click(tag: number) {
    switch (tag) {
      case 1:
        this.check = !this.check;
        break;
      case 2:
        this.checkMon = !this.checkMon;
        break;
      case 3:
        this.checkYear = !this.checkYear;
        break;
    }
  }
  changeValue(value: number) {
    this.day = value;
    this.check = false;
  }
  changeValueMon(value: number) {
    this.mon = value;
    this.checkMon = false;
  }
  changeValueYear(value: number) {
    this.year = value;
    this.checkYear = false;
  }
}
