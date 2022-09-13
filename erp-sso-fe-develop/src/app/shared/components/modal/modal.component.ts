import { ModalService } from "./modal.service";
import { Component, ElementRef, Input, OnDestroy, OnInit } from "@angular/core";

@Component({
  selector: "app-modal",
  templateUrl: "./modal.component.html",
  styleUrls: ["./modal.component.css"],
})
export class ModalComponent implements OnInit, OnDestroy {
  @Input() id = "";
  private element: any;
  isOpen = false;

  constructor(private modalService: ModalService, private el: ElementRef) {
    this.element = el.nativeElement;
  }
  ngOnInit() {
    if (!this.id) {
      console.error("modal must have an id");
      return;
    }
    document.body.appendChild(this.element);
    this.modalService.add(this);
  }
  close() {
    this.isOpen = false;
  }
  open() {
    this.isOpen = true;
  }
  ngOnDestroy(): void {
    this.modalService.remove(this.id);
    this.element.remove();
  }
}
