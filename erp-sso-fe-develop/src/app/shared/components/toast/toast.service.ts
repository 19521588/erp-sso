import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ToastService {
  private toast: any[] = [];

  add(toast: any) {
    this.toast.push(toast);
  }

  remove(id: string) {
    this.toast = this.toast.filter((x) => x.id !== id);
  }

  open(id: string) {
    const modal = this.toast.find((x) => x.id === id);
    modal.open();
  }

  close(id: string) {
    const modal = this.toast.find((x) => x.id === id);
    modal.close();
  }
}
