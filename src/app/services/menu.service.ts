import { Injectable } from '@angular/core';
import { MenuItem } from '../models/menu-item';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private menuList: MenuItem[] = [
    { id: 1, descrizione: 'Homepage', selezionato: true, url: '/home' },
    { id: 2, descrizione: 'Lista', selezionato: false, url: '/list' },
    { id: 3, descrizione: 'Cards', selezionato: false, url: '/cards' },
    { id: 4, descrizione: 'Feedback', selezionato: false, url: '/feedback' },
    { id: 5, descrizione: 'Profilo', selezionato: false, url: '/profilo' },
  ]

  constructor() { }

  getMenuList(): MenuItem[] {
    return this.menuList;
  }

}
