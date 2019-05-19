import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit  {
  
  formGroup : FormGroup;
  dateModel: Date = new Date();

  stringDateModel: string = new Date().toString();

  ngOnInit() {
    this.formGroup = new FormGroup({
      activeEndDate:  new FormControl(new Date(), {validators: [Validators.required, DateTimeValidator]})
    }, { updateOn: 'change' });
  }
}

export const DateTimeValidator = (fc: FormControl) => {
    const date = new Date(fc.value);
    const isValid = !isNaN(date.valueOf());
    return isValid ? null : {
        isValid: {
            valid: false
        }
    };
};