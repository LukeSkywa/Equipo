import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './homepage/home.component';
import { ListaComponent } from './lista/lista.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  { path: 'list', component: ListaComponent},
  { path: 'list/:localita', component: ListaComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
