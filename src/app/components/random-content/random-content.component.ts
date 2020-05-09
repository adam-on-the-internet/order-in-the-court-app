import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-random-content',
  templateUrl: './random-content.component.html',
  styleUrls: ['./random-content.component.scss']
})
export class RandomContentComponent implements OnInit {

  constructor() { }

  public ngOnInit() {
    this.loadAllContent();
  }

  private loadAllContent() {

  }

}
