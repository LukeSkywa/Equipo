import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';
import { MenuItem } from 'src/app/models/menu-item';
import { Router } from '@angular/router';
import { SearchViaggioService } from 'src/app/services/search-viaggio.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  currentRoute:string=null;

  menuList: MenuItem[] = [];
  constructor(private menuListService: MenuService, private router:Router, private  myService: SearchViaggioService) {
    this.menuList = this.menuListService.getMenuList();
  }

  ngOnInit(): void {
    this.router.events.subscribe(value => {
      this.currentRoute=this.router.url.toString();
    });
  }


  logout(){
    sessionStorage.removeItem("user");
    this.router.navigateByUrl('/login');
  }
  
  search(inputValue:string){
    this.myService.pubblicaNuovoMessaggio(inputValue);
  }
  

}
