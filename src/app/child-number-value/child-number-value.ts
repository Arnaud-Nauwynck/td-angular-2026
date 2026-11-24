import { Component, Input, model, Output } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  imports: [ReactiveFormsModule, FormsModule],
  selector: 'app-child-number-value',
  templateUrl: './child-number-value.html',
})
export class ChildNumberValue {
  // childNumberValue = 1;
  @Input() childNumberValue: number = 12345;
  @Output() childNumberValueChange = new Subject<number>();

  childNumberValue2 = model(1);

  incrementChildValue() {
    this.childNumberValue++;
    this.fireChildNumberValueChange();
    this.childNumberValue2.set(this.childNumberValue2() + 1);
  }

  fireChildNumberValueChange() {
    this.childNumberValueChange.next(this.childNumberValue);
  }

}
