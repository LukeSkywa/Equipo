import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './componets/login/login.component';
import { HomepageComponent } from './componets/homepage/homepage.component';
import { ListaComponent } from './componets/lista/lista.component';
import { CardsComponent } from './componets/cards/cards.component';
import { FeedbackComponent } from './componets/feedback/feedback.component';
import { ProfiloComponent } from './componets/profilo/profilo.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomepageComponent },
  { path: 'list', component: ListaComponent },
  { path: 'cards', component: CardsComponent },
  { path: 'feedback', component: FeedbackComponent },
  { path: 'profilo', component: ProfiloComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  //{ path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
