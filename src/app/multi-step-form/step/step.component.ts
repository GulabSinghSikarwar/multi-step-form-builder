import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.css']
})
export class StepComponent implements OnInit {
  @Input() stepData: any;
  @Input() stepForm : any; // Ensure stepForm is properly declared as an input

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.stepForm = this.createStepForm();
  }

  createStepForm(): FormGroup {
    const formGroup = this.fb.group({});
    this.stepData?.questions.forEach((question: any) => {
      formGroup.addControl(question.model, this.fb.control(''));
    });
    return formGroup;
  }
}
