import { Component, Input, model, Output } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  imports: [ReactiveFormsModule, FormsModule],
  selector: 'app-td4-child-comp',
  templateUrl: './td4-child-comp.html',
})
export class Td4ChildComp {

  @Input("childFieldNumber")
  _childFieldNumber = 1;

  get childFieldNumber() {
    return this._childFieldNumber;
  }

  set childFieldNumber(value: number) {
    this._childFieldNumber = value;
    this.childFieldNumberChange.next(this.childFieldNumber);
  }

  @Output()
  childFieldNumberChange = new Subject<number>();

  childFieldNumber2 = model(1);

  protected onClickIncrement() {
    this.childFieldNumber++;
    this.childFieldNumber2.set(this.childFieldNumber2() + 1);
  }

}
