import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ListaComponent } from './components/lista/lista.component';
import { CardsComponent } from './components/cards/cards.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { ProfiloComponent } from './components/profilo/profilo.component';
import { LoginGuard } from './guards/login.guard';
import { CanactivateLoginGuard } from './guards/canactivate-login.guard';
import { RegistrazioneComponent } from './components/registrazione/registrazione.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent ,canActivate:[CanactivateLoginGuard]},
  { path: 'home', component: HomepageComponent,canActivate:[LoginGuard] },
  { path: 'list', component: ListaComponent,canActivate:[LoginGuard] },
  { path: 'cards', component: CardsComponent,canActivate:[LoginGuard] },
  { path: 'feedback', component: FeedbackComponent,canActivate:[LoginGuard] },
  { path: 'profilo', component: ProfiloComponent,canActivate:[LoginGuard] },
  { path: 'registrazione', component: RegistrazioneComponent, canActivate:[CanactivateLoginGuard] },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
