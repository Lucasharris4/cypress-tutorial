import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  myForm: FormGroup;
  message: string = '';

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      framework: new FormControl('')
    })
    this.myForm.controls.framework.setValue("angular");
  }
  submit() {
    this.message = "Submitted, thanks for your input!"
  }

}
