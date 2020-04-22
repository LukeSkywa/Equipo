import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Equipo';

  sfondoBianco = true;
  //isLog: string = sessionStorage.getItem('user');
  isLog(): boolean {
    if (sessionStorage.getItem('user'))
    return true
  }
  
}
