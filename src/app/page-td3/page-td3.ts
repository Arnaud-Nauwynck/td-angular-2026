import { Component, model } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-page-td3',
  templateUrl: './page-td3.html',
})
export class PageTd3 {

  numberValue = 1;

  numberValue2 = model(1);


  incrementValue() {
    this.numberValue++;
    this.numberValue2.set(this.numberValue2() + 1);
  }
}

