import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-statistics-page',
  templateUrl: './statistics-page.html',
})
export class StatisticsPage implements OnInit, OnDestroy {

  constructor() {
    console.log("StatisticsPage.constructor");
  }

  ngOnInit(): void {
    console.log('StatisticsPage.ngOnInit');
  }

  ngOnDestroy(): void {
    console.log('StatisticsPage.ngOnDestroy');
  }
}
