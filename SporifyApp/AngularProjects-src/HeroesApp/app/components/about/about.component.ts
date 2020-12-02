import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html'
})
export class AboutComponent implements OnInit {

  day: number;
  month: number;
  year: number;

  constructor() {
    this.day = new Date().getDate();
    this.month = new Date().getMonth();
    this.year = new Date().getFullYear();
  }

  ngOnInit(): void {
  }

}
