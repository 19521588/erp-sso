import { ReactiveFormsModule } from '@angular/forms';
import { ListingComponentsComponent } from './listing-components/listing-components.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [ListingComponentsComponent],
  imports: [
    CommonModule,BrowserModule,ReactiveFormsModule,RouterModule
  ],exports :[ListingComponentsComponent]
})
export class ListingModule { }
