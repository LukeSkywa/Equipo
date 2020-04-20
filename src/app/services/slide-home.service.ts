import { Injectable } from '@angular/core';
import { SlideHome } from '../models/slide-home';

@Injectable({
  providedIn: 'root'
})
export class SlideHomeService {

  private slideList: SlideHome[] = [
    { id: 1, descrizione: 'descrizione1', urlImg: '../../../assets/immagini/sfondo1.jpg' },
    { id: 2, descrizione: 'descrizione2', urlImg: '../../../assets/immagini/sfondo2.jpg' },
    { id: 3, descrizione: 'descrizione3', urlImg: '../../../assets/immagini/sfondo3.jpg' },
    { id: 4, descrizione: 'descrizione4', urlImg: '../../../assets/immagini/sfondo4.jpg' },
  ]
  constructor() { }

  getSlideList(): SlideHome[] {
    return this.slideList;
  }
}
