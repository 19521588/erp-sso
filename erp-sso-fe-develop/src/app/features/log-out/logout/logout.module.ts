import { RouterModule } from '@angular/router';
import { LogoutComponent } from './logout.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';




@NgModule({
  declarations: [ LogoutComponent],
  imports: [
    CommonModule,RouterModule
  ],
  exports:[LogoutComponent]
})
export class LogoutModule { }
