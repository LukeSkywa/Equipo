import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';
import { MenuItem } from 'src/app/models/menu-item';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  menuList: MenuItem[] = [];

  constructor(private menuListService: MenuService) {
    this.menuList = this.menuListService.getMenuList();
  }

  ngOnInit(): void {
  }

}
