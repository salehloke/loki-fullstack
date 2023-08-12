import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SecondFormGroupModel } from '../../../shared/models/stepper-form.model';
import { NgSelectModule } from '@ng-select/ng-select';

@Component({
  selector: 'loki-fullstack-second-step-form',
  standalone: true,
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    NgSelectModule,
  ],
  templateUrl: './second-step-form.component.html',
  styleUrls: ['./second-step-form.component.scss'],
})
export class SecondStepFormComponent {
  @Input() stepFormGroup?: FormGroup<SecondFormGroupModel>;

  availableSkillsets = availableSkillsets;

  constructor() {}

  get f() {
    return this.stepFormGroup?.controls;
  }

  get isErrorVisible() {
    const isTouched = this.f?.skillsets.touched;
    const isDirty = this.f?.skillsets.dirty;
    const isInvalid = this.f?.skillsets.invalid;

    return (isTouched || isDirty) && isInvalid;
  }
}

export const availableSkillsets = [
  {
    name: 'Web Development',
    value: 'web-development',
  },
  {
    name: 'Mobile Development',
    value: 'mobile-development',
  },
  {
    name: 'UI/UX Design',
    value: 'ui-ux-design',
  },
  {
    name: 'Data Science',
    value: 'data-science',
  },
  {
    name: 'DevOps',
    value: 'devops',
  },
  {
    name: 'Cyber Security',
    value: 'cyber-security',
  },
];
