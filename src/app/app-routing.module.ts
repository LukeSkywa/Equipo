import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ListaComponent } from './components/lista/lista.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { ProfiloComponent } from './components/profilo/profilo.component';
import { LoginGuard } from './guards/login.guard';
import { CanactivateLoginGuard } from './guards/canactivate-login.guard';
import { RegistrazioneComponent } from './components/registrazione/registrazione.component';
import { ModificaProfiloComponent } from './components/modifica-profilo/modifica-profilo.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { DettaglioViaggioComponent } from './components/dettaglio-viaggio/dettaglio-viaggio.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent ,canActivate:[CanactivateLoginGuard]},
  { path: 'home', component: HomepageComponent,canActivate:[LoginGuard] },
  { path: 'list', component: ListaComponent,canActivate:[LoginGuard] },
  { path: 'list/:localita', component: ListaComponent,canActivate:[LoginGuard] },
  { path: 'dettaglio/:id', component: DettaglioViaggioComponent,canActivate:[LoginGuard] },
  { path: 'feedback', component: FeedbackComponent,canActivate:[LoginGuard] },
  { path: 'profilo', component: ProfiloComponent,canActivate:[LoginGuard] },
  { path: 'modifica-profilo', component: ModificaProfiloComponent,canActivate:[LoginGuard] },
  { path: 'registrazione', component: RegistrazioneComponent, canActivate:[CanactivateLoginGuard] },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule) },
  { path: '**', component: PageNotFoundComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
