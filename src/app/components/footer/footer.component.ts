import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  currentRoute: string = null;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.events.subscribe(value => {
      this.currentRoute = this.router.url.toString();
    });
  }

}
