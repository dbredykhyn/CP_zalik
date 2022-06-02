import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { MainPage } from './main.page';
import { ReactiveFormsModule } from '@angular/forms';
import { MainPageRoutingModule } from './main-routing.module';

import { HeaderComponent } from '../header/header.component';
import { ReactiveFormComponent } from '../rform/reactive-form.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    MainPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [MainPage, HeaderComponent, ReactiveFormComponent]
})
export class MainPageModule {}
