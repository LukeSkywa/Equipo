import { Component, OnInit } from '@angular/core';
import { SlideHome } from 'src/app/models/slide-home';
import { SlideHomeService } from 'src/app/services/slide-home.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  slideList: SlideHome[] = [];

  constructor(private slideListService: SlideHomeService) {
    this.slideList = this.slideListService.getSlideList();
  }

  ngOnInit(): void {
  }

}
