import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-td3-form',
  templateUrl: './td3-form.html',
})
export class Td3Form {

  form!: FormGroup;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      firstName: [],
      lastName: [],
      email: [],
    });
  }

  onSubmit() {
    console.log('Form submitted:', this.form.value);
  }
}
