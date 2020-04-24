import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ReactiveFormsModule } from '@angular/forms';

import { MatSliderModule } from '@angular/material/slider';
import {MatRadioModule} from '@angular/material/radio';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSelectModule} from '@angular/material/select';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatCarouselModule } from '@ngmodule/material-carousel';

import { MenuComponent } from './components/menu/menu.component';
import { ListaComponent } from './components/lista/lista.component';
import { CardsComponent } from './components/cards/cards.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { ProfiloComponent } from './components/profilo/profilo.component';
import { RegistrazioneComponent } from './components/registrazione/registrazione.component';
import { FooterComponent } from './components/footer/footer.component';
import { ModificaProfiloComponent } from './components/modifica-profilo/modifica-profilo.component';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomepageComponent,
    MenuComponent,
    ListaComponent,
    CardsComponent,
    FeedbackComponent,
    ProfiloComponent,
    RegistrazioneComponent,
    FooterComponent,
    ModificaProfiloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatSliderModule,
    MatToolbarModule,
    MatTabsModule,
    MatInputModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatMenuModule,
    MatRadioModule,
    MatSelectModule,
    MatCarouselModule,
    BrowserAnimationsModule,
    FormsModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
