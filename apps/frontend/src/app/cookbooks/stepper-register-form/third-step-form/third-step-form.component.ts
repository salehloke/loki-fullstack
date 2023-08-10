import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { availableSkillsets } from '../second-step-form/second-step-form.component';
import { ThirdFormGroupModel } from '../../../shared/models/stepper-form.model';

@Component({
  selector: 'loki-fullstack-third-step-form',
  standalone: true,
  imports: [CommonModule, MatInputModule, MatFormFieldModule, ReactiveFormsModule, FormsModule],
  templateUrl: './third-step-form.component.html',
  styleUrls: ['./third-step-form.component.scss'],
})
export class ThirdStepFormComponent {
  @Input() stepFormGroup?: FormGroup<ThirdFormGroupModel>;

  availableSkillsets = availableSkillsets;

  constructor() {}


  get f() {
    return this.stepFormGroup?.controls;
  }

  get usernameMinLengthErrors() {
    return this.f?.username.errors ? ['minlength'] : null;
  }

  get usernamePatternErrors() {
    return this.f?.username.errors ? ['pattern'] : null;
  }
}
