import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './componets/login/login.component';
import { HomepageComponent } from './componets/homepage/homepage.component';
import { ListaComponent } from './componets/lista/lista.component';
import { CardsComponent } from './componets/cards/cards.component';
import { FeedbackComponent } from './componets/feedback/feedback.component';
import { ProfiloComponent } from './componets/profilo/profilo.component';
import { LoginGuard } from './guards/login.guard';
import { CanactivateLoginGuard } from './guards/canactivate-login.guard';


const routes: Routes = [
  { path: 'login', component: LoginComponent ,canActivate:[CanactivateLoginGuard]},
  { path: 'home', component: HomepageComponent,canActivate:[LoginGuard] },
  { path: 'list', component: ListaComponent,canActivate:[LoginGuard] },
  { path: 'cards', component: CardsComponent,canActivate:[LoginGuard] },
  { path: 'feedback', component: FeedbackComponent,canActivate:[LoginGuard] },
  { path: 'profilo', component: ProfiloComponent,canActivate:[LoginGuard] },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
