import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  FormsModule,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserCRUDService } from '../../../shared/services/user-crud.service';
import { availableSkillsets } from '../../stepper-register-form/second-step-form/second-step-form.component';
import { MatInputModule } from '@angular/material/input';
import { NgSelectModule } from '@ng-select/ng-select';

@Component({
  selector: 'loki-fullstack-update-user-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    NgSelectModule,
  ],
  templateUrl: './update-user-form.component.html',
  styleUrls: ['./update-user-form.component.scss'],
})
export class UpdateUserFormComponent {
  @Input() id = '';
  @Input() registrationFormGroup!: FormGroup<RegistrationFormModel>;

  availableSkillsets = availableSkillsets;

  constructor(
    public apiService: UserCRUDService,
    private toastr: ToastrService,
    private route: ActivatedRoute
  ) {}

  getSubmitDataModel() {
    const submitData: FormGroup<RegistrationFormModel>['value'] = {
      email: this.f.email.value,
      username: this.f.username.value,
      phoneNumber: this.f.phoneNumber.value,
      skillsets: this.f.skillsets.value,
      hobby: this.f.hobby.value,
    };

    return submitData;
  }

  get f() {
    return this.registrationFormGroup.controls;
  }
}

export interface RegistrationFormModel {
  email: FormControl<string | null>;
  username: FormControl<string | null>;
  phoneNumber: FormControl<string | null>;
  skillsets: FormControl<string[] | null>;
  hobby: FormControl<string | null>;
  jobTitle: FormControl<string | null>;
}
