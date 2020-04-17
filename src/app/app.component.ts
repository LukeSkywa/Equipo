import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Equipo';

  nascondi(){
    if(sessionStorage.getItem('user')===null)
      return false;
    else
      return true;
  }
}
