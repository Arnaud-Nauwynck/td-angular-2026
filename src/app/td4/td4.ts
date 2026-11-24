import { Component, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Td4ChildComp } from '../td4-child-comp/td4-child-comp';

@Component({
  imports: [FormsModule, Td4ChildComp],
  selector: 'app-td4',
  templateUrl: './td4.html',
})
export class Td4 {
  protected fieldNumber = 1;

  protected fieldNumber2 = model(1);

  protected onClickIncrement() {
    this.fieldNumber++;
    this.fieldNumber2.set(this.fieldNumber2() + 1);
  }

  // protected onInputEditText($event: any) {
  //   console.log("la valeur a changé, event:", $event);
  // }
  protected onChildFieldNumber2Change($event: number) {
    this.fieldNumber2.set($event);
  }

  protected onChildFieldNumberChange($event: number) {
    this.fieldNumber = $event;
  }
}
