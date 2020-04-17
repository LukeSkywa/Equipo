import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componets/login/login.component';
import { HomepageComponent } from './componets/homepage/homepage.component';
import { MenuComponent } from './componets/menu/menu.component';
import { ListaComponent } from './componets/lista/lista.component';
import { CardsComponent } from './componets/cards/cards.component';
import { FeedbackComponent } from './componets/feedback/feedback.component';
import { ProfiloComponent } from './componets/profilo/profilo.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomepageComponent,
    MenuComponent,
    ListaComponent,
    CardsComponent,
    FeedbackComponent,
    ProfiloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
