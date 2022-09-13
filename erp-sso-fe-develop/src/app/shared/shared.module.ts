import { MasterPageLoginComponent } from "./components/master-page-login/master-page-login.component";
import { RouterModule } from "@angular/router";
import { TranslateModule } from "@ngx-translate/core";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TextInputComponent } from "./components/text-input/text-input.component";
import { CommonModule } from "@angular/common";
import { ModalComponent } from "./components/modal/modal.component";

import { ToastComponent } from "./components/toast/toast.component";

import { InputDateComponent } from "./components/input-date/input-date.component";
import { MasterPageComponent } from "./components/master-page/master-page.component";
import { PrimaryInputComponent } from "./components/primary-input/primary-input.component";

@NgModule({
  declarations: [
    TextInputComponent,
    MasterPageLoginComponent,
    ModalComponent,
    ToastComponent,
    InputDateComponent,
    MasterPageComponent,
    PrimaryInputComponent,
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    TranslateModule,
    RouterModule,
  ],
  exports: [
    TextInputComponent,
    MasterPageLoginComponent,
    ModalComponent,
    ToastComponent,
    InputDateComponent,
    MasterPageComponent,
    PrimaryInputComponent,
  ],
})
export class Sharedmodule {}
