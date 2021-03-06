import { Component, OnInit } from '@angular/core';
import { PageTitleService } from '../../../page-title.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  currentStep = 0;

  constructor(private pageTitleService: PageTitleService) { }

  ngOnInit() {
    this.pageTitleService.setTitle('Welcome');
    this.pageTitleService.setBackgroundImage('https://source.unsplash.com/gD7KrKqYZFk/1600x900');
  }

}
