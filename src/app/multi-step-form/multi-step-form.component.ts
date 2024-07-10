import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms'; 
import { FormDataService } from '../service/form-data.service';
@Component({
  selector: 'app-multi-step-form',
  templateUrl: './multi-step-form.component.html',
  styleUrls: ['./multi-step-form.component.scss']
})
export class MultiStepFormComponent implements OnInit {
  form !: FormGroup;
  formSteps: any[] = [];
  currentStepIndex = 0;

  constructor(private fb: FormBuilder, private formDataService: FormDataService) {
    this.formSteps = this.formDataService.getFormData().steps;
    this.createForm();
  }

  ngOnInit(): void {

  }

  createForm() {
    const formGroup = this.fb.group({});
    this.formSteps.forEach(step => {
      const stepGroup = this.fb.group({});
      step.questions.forEach((question: any) => {
        stepGroup.addControl(question.model, this.fb.control(''));
      });
      formGroup.addControl(step.title, stepGroup);
    });
    this.form = formGroup;
  }

  goToNextStep() {
    if (this.currentStepIndex < this.formSteps.length - 1) {
      this.currentStepIndex++;
    }
  }

  goToPreviousStep() {
    if (this.currentStepIndex > 0) {
      this.currentStepIndex--;
    }
  }
}
