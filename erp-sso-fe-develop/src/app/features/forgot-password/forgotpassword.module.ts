import { FormsModule } from '@angular/forms';
import { Sharedmodule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetotpComponent } from './components/getotp/getotp/getotp.component';
import { CreateNewpassComponent } from './components/create-newpass/create-newpass.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ForgotPasswordComponent, GetotpComponent, CreateNewpassComponent],
  imports: [
    CommonModule,RouterModule,Sharedmodule,FormsModule,ReactiveFormsModule,ReactiveFormsModule
  ],
  exports:[ForgotPasswordComponent,GetotpComponent,CreateNewpassComponent]
})
export class ForgotpasswordModule { }
