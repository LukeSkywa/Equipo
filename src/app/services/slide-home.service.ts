import { Injectable } from '@angular/core';
import { SlideHome } from '../models/slide-home';

@Injectable({
  providedIn: 'root'
})
export class SlideHomeService {
  

  private slideList: SlideHome[] = [
    { id: 1, descrizione: 'Hai visto che bel paesaggio?...con la nostra agenzia potrai iniziare a viaggiare già con la mente osservando i fantastici luoghi che offriamo, guarda anche tu la lista viaggi e scegli i tuoi preferiti e noi...ti aiuteremo a farli davvero! Quelli che non ti piacciono li puoi nasconere e se ci ripensi sei sempre in tempo a cambiare idea.', urlImg: '../../../assets/immagini/sfondo1.jpg' },
    { id: 2, descrizione: 'Per visualizzare i viaggi che ti piacerebbero fare, passa nella sezione "Lista" così sarà più facile cercare ciò che ti serve ! Ne potrai visitare quanti ne vuoi scorrendo il nostro elenco.', urlImg: '../../../assets/immagini/sfondo2.jpg' },
    { id: 3, descrizione: 'Puoi inviarci un feedback quando vuoi, o chiedere qualsiasi informazione compilando il form della sezione "Feedback".', urlImg: '../../../assets/immagini/sfondo3.jpg' },
    { id: 4, descrizione: 'Controlla il tuo profilo accedendo alla sezione "Profilo" e se necessario puoi aggiornare le tue informazioni personali con semplicità senza problemi.', urlImg: '../../../assets/immagini/sfondo4.jpg' },
  ]
  constructor() { }

  getSlideList(): SlideHome[] {
    return this.slideList;
  }
}
