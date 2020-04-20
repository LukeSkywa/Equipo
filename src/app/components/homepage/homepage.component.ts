import { Component, OnInit } from '@angular/core';
import { SlideHome } from 'src/app/models/slide-home';
import { SlideHomeService } from 'src/app/services/slide-home.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  slideList: SlideHome[] = [];

  constructor(private slideListService: SlideHomeService) {
    this.slideList = this.slideListService.getSlideList();
  }

  ngOnInit(): void {
  }

}
