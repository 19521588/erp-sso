import {
  Component,
  OnInit,
  Input,
  ElementRef,
  HostListener,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css'],
})
export class DatePickerComponent implements OnInit {
  @Output() getDataEvent = new EventEmitter<string>();
  getDate(value: string) {
    this.getDataEvent.emit(value);
  }

  @Input() date!: string;

  @HostListener('document:click', ['$event'])
  onClick(event: any) {
    if (!this._eref.nativeElement.contains(event.target)) {
      this.selectDay = false;
      this.selectMonth = false;
      this.selectYear = false;
    }
  }
  constructor(private _eref: ElementRef) {}

  days: any[] = [];
  months: any[] = [];
  years: any[] = [];
  currentYear = 0;
  currentMonth = 0;
  currentDay = 0;

  day = 'dd';
  month = 'mm';
  year = 'yyyy';

  fromYear = 1900;

  selectDay = false;
  selectMonth = false;
  selectYear = false;

  ngOnInit(): void {
    const date = new Date();

    this.currentYear = date.getFullYear();
    this.currentMonth = date.getMonth() + 1;
    this.currentDay = date.getDate();

    for (let index = 0; index <= this.currentYear - this.fromYear; index++) {
      this.years.push(this.fromYear + index);
      if (index < 12) this.months.push(index + 1);
      if (index < 31) this.days.push(index + 1);
    }
    this.years = this.years.reverse();
    this.LoadData();
  }
  LoadData() {
    const splittedDate = this.date.split('/');

    if (splittedDate[0].substring(0, 1) === '0')
      this.day = splittedDate[0].substring(1, 2);
    else this.day = splittedDate[0];
    if (splittedDate[1].substring(0, 1) === '0')
      this.month = splittedDate[1].substring(1, 2);
    else this.month = splittedDate[1];

    this.year = splittedDate[2];
  }
  select(type: any) {
    switch (type) {
      case 0:
        this.selectDay = !this.selectDay;
        this.selectMonth = false;
        this.selectYear = false;
        break;
      case 1:
        this.selectMonth = !this.selectMonth;
        this.selectDay = false;
        this.selectYear = false;
        break;
      case 2:
        this.selectYear = !this.selectYear;
        this.selectMonth = false;
        this.selectDay = false;
        break;
      default:
        break;
    }
  }
  changeValue(type: any, value: any) {
    switch (type) {
      case 0:
        this.day = value;
        this.selectDay = !this.selectDay;
        break;
      case 1:
        this.month = value;
        this.selectMonth = !this.selectMonth;
        break;
      case 2:
        this.year = value;
        this.selectYear = !this.selectYear;
        break;

      default:
        break;
    }
    if (
      this.check() &&
      this.day != 'dd' &&
      this.month != 'mm' &&
      this.year != 'yyyy'
    )
      this.getDate(this.dateConvert());
    else this.getDate('false');
  }
  dateConvert() {
    return (
      (Number(this.day) < 10 ? '0' + this.day : this.day) +
      '/' +
      (Number(this.month) < 10 ? '0' + this.month : this.month) +
      '/' +
      this.year
    );
  }
  validateDate(date: string) {
    const regex = new RegExp(
      /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/g
    );

    if (!regex.test(date)) {
      return false;
    } else {
      const today = new Date();
      const inputDay = new Date(this.month + '/' + this.day + '/' + this.year);

      if (inputDay.setHours(0, 0, 0, 0) > today.setHours(0, 0, 0, 0))
        return false;
      else return true;
    }
  }

  check() {
    if (!this.isEmpty()) return true;
    return this.validateDate(this.dateConvert());
  }
  isEmpty() {
    if (
      (this.day === 'dd' && this.month === 'mm' && this.year === 'yyyy') ||
      (!this.day && !this.month && this.year)
    ) {
      return false;
    }
    return true;
  }
}
