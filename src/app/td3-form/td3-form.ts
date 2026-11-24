import { Component, ElementRef, inject, viewChild } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-td3-form',
  templateUrl: './td3-form.html',
})
export class Td3Form {

  private formBuilder = inject(FormBuilder);
  firstNameInput = viewChild<ElementRef<HTMLInputElement>>('firstName');
  lastNameInput = viewChild<ElementRef<HTMLInputElement>>('lastName');
  emailInput = viewChild<ElementRef<HTMLInputElement>>('email');

  form = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', Validators.email
    ],
  });

  onSubmit() {
    console.log('Form submitted:', this.form.value);
  }

  focusInput(input: ElementRef<HTMLInputElement> | undefined) {
    input?.nativeElement.focus();
  }
}
