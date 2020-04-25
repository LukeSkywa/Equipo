import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';
import { MenuItem } from 'src/app/models/menu-item';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  currentRoute: string = null;

  searchInput: string;

  inputValueInSession: string = sessionStorage.getItem('search');

  menuList: MenuItem[] = [];
  constructor(private menuListService: MenuService, private router: Router) {
    this.menuList = this.menuListService.getMenuList();
  }

  ngOnInit(): void {
    this.router.events.subscribe(value => {
      this.currentRoute = this.router.url.toString();
    });

    if (this.currentRoute=='/list') {
      sessionStorage.removeItem('search');
    }
    console.log(this.inputValueInSession);
  }

  logout() {
    sessionStorage.removeItem("user");
    this.router.navigateByUrl('/login');
  }

  inputEvent(ev) {
    this.searchInput = ev.target.value;
  }

}
