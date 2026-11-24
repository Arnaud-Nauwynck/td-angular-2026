import { Component, Input, model, Output } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  imports: [ReactiveFormsModule, FormsModule],
  selector: 'app-child-number-value',
  templateUrl: './child-number-value.html',
})
export class ChildNumberValue {

  @Input('childNumberValue')
  _childNumberValue = 12345;

  @Output()
  childNumberValueChange = new Subject<number>();

  get childNumberValue(): number {
    return this._childNumberValue;
  }
  set childNumberValue(value: number) {
    this._childNumberValue = value;
    this.childNumberValueChange.next(this.childNumberValue);
  }

  protected firePropertyChangeNumberValue() {
    this.childNumberValueChange.next(this.childNumberValue);
  }

  childNumberValue2 = model(12345);

  incrementValue() {
    this.childNumberValue++;
    this.childNumberValue2.set(this.childNumberValue2() + 1);
  }
}
