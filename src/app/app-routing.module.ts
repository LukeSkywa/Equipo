import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './componets/login/login.component';
import { HomepageComponent } from './componets/homepage/homepage.component';


const routes: Routes = [
  {path: 'login', component:LoginComponent},
  {path: 'home', component:HomepageComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
