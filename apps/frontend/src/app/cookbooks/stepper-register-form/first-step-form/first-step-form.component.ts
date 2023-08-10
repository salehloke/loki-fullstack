import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FirstFormGroupModel } from '../../../shared/models/stepper-form.model';

@Component({
  selector: 'loki-fullstack-first-step-form',
  standalone: true,
  imports: [CommonModule, MatInputModule, MatFormFieldModule, ReactiveFormsModule, FormsModule],
  templateUrl: './first-step-form.component.html',
  styleUrls: ['./first-step-form.component.scss'],
})
export class FirstStepFormComponent {
  @Input() stepFormGroup?: FormGroup<FirstFormGroupModel>;

  constructor() {}


  get f() {
    return this.stepFormGroup?.controls;
  }
}
