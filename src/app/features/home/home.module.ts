import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './homepage/home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ListaComponent } from './lista/lista.component';


@NgModule({
  declarations: [HomeComponent, ListaComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
