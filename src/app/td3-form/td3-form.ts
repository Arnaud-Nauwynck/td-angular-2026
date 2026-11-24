import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-td3-form',
  templateUrl: './td3-form.html',
})
export class Td3Form {
  private formBuilder = inject(FormBuilder);

  form = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', Validators.required, // Validators.email()
    ],
  });

  onSubmit() {
    console.log('Form submitted:', this.form.value);
  }
}
