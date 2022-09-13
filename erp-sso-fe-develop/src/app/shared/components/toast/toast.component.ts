import { Component, ElementRef, Input, OnDestroy, OnInit } from "@angular/core";
import { ToastService } from "./toast.service";

const toastContainerId = "erpToastContainer";

@Component({
  selector: "app-toast",
  templateUrl: "./toast.component.html",
  styleUrls: ["./toast.component.css"],
})
export class ToastComponent implements OnInit, OnDestroy {
  private element: any;
  constructor(private toastsv: ToastService, private el: ElementRef) {
    this.element = el.nativeElement;
  }
  @Input() id = "";
  @Input() statusToast = "";
  @Input() MessToast = "";
  IsOpen = false;
  close() {
    this.IsOpen = false;
  }
  open() {
    this.IsOpen = true;
  }
  ngOnInit(): void {
    let toastContainer: HTMLElement | null =
      document.getElementById(toastContainerId);
    if (!toastContainer) {
      toastContainer = document.createElement("div");
      toastContainer.className = "fixed bg-black w-10 h-auto bottom-4 left-4";
      document.body.appendChild(toastContainer);
    }

    toastContainer.appendChild(this.element);
    this.toastsv.add(this);
  }
  ngOnDestroy(): void {
    this.toastsv.remove(this.id);
    this.element.remove();
  }
}
