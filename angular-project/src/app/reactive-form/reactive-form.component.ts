import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
})
export class ReactiveFormComponent {
  constructor(private formBuilder: FormBuilder) {}

  profileForm = this.formBuilder.group({
    firstName: [''],
    lastName: [''],
    address: [''],
    dob: [''],
    gender: [''],
  });

  saveForm() {
    console.log('Form data is ', this.profileForm.value);
  }
}
