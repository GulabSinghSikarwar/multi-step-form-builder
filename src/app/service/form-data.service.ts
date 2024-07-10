import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormDataService {
  private formData = {
    steps: [
      {
        title: 'Step 1',
        questions: [
          {
            label: 'Is your household income above $60,000?',
            options: ['Yes', 'No'],
            model: 'incomeAbove60000',
            type: 'radio'
          },
          {
            label: 'How many people are in your household?',
            options: [
              { label: '1', value: '1' },
              { label: '2', value: '2' },
              { label: '3', value: '3' },
              { label: '4+', value: '4+' }
            ],
            model: 'householdSize',
            type: 'select'
          },
          {
            label: 'Do you own your home?',
            options: ['Yes', 'No'],
            model: 'ownHome',
            type: 'radio'
          }
        ]
      },
      {
        title: 'Step 2',
        questions: [
          {
            label: 'Select Service',
            options: [
              { label: 'Option 1', value: 'Option 1' },
              { label: 'Option 2', value: 'Option 2' },
              { label: 'Option 3', value: 'Option 3' }
            ],
            model: 'serviceValue',
            type: 'select'
          },
          {
            label: 'Select Method',
            options: [
              { label: 'First Available Date and Time', value: '1' },
              { label: 'Search By Zipcode', value: '2' },
              { label: 'Search By Location', value: '3' }
            ],
            model: 'selected_method',
            type: 'radio'
          },
          {
            label: 'Enter Zipcode',
            model: 'zipcode',
            type: 'text'
          }
        ]
      }
    ]
  };

  constructor() { }

  getFormData() {
    return this.formData;
  }
}
