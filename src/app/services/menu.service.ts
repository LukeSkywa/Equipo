import { Injectable } from '@angular/core';
import { MenuItem } from '../models/menu-item';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private menuList: MenuItem[] = [
    { id: 1, descrizione: 'Homepage', selezionato: true, url: '/home', class: "one" },
    { id: 2, descrizione: 'Lista', selezionato: false, url: '/list', class: "two" },
    { id: 3, descrizione: 'Cards', selezionato: false, url: '/cards', class: "three" },
    { id: 4, descrizione: 'Feedback', selezionato: false, url: '/feedback', class: "four" },
    { id: 5, descrizione: 'Profilo', selezionato: false, url: '/profilo', class: "five" },
  ]

  constructor() { }

  getMenuList(): MenuItem[] {
    return this.menuList;
  }

}
