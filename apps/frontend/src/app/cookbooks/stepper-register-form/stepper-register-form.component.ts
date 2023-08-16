import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  FormArray,
  ReactiveFormsModule,
  FormsModule,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatStepperModule } from '@angular/material/stepper';
import { MatBadgeModule } from '@angular/material/badge';

// CUSTOM
import {
  FirstFormGroupModel,
  SecondFormGroupModel,
  ThirdFormGroupModel,
} from '../../shared/models/stepper-form.model';
import { UserCRUDSubmitModel } from '../../shared/models/user-crud.model';
import { UserCRUDService } from '../../shared/services/user-crud.service';
import { FirstStepFormComponent } from './first-step-form/first-step-form.component';
import { SecondStepFormComponent } from './second-step-form/second-step-form.component';
import { ThirdStepFormComponent } from './third-step-form/third-step-form.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'loki-fullstack-stepper-register-form',
  standalone: false,
  // imports: [
  //   CommonModule,
  //   MatInputModule,
  //   MatFormFieldModule,
  //   MatProgressSpinnerModule,
  //   MatStepperModule,
  //   MatBadgeModule,
  //   FirstStepFormComponent,
  //   SecondStepFormComponent,
  //   ThirdStepFormComponent,
  //   ReactiveFormsModule,
  //   FormsModule,
  //   HttpClientModule,
  // ],
  templateUrl: './stepper-register-form.component.html',
  styleUrls: ['./stepper-register-form.component.scss'],
})
export class StepperRegisterFormComponent {
  constructor(
    private _formBuilder: FormBuilder,
    private toastr: ToastrService,
    public apiService: UserCRUDService,
    private router: Router
  ) {}

  firstFormGroup: FormGroup<FirstFormGroupModel> =
    new FormGroup<FirstFormGroupModel>({
      jobTitle: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
    });

  secondFormGroup: FormGroup<SecondFormGroupModel> =
    new FormGroup<SecondFormGroupModel>({
      skillsets: new FormControl([], Validators.required),
    });

  thirdFormGroup: FormGroup<ThirdFormGroupModel> =
    new FormGroup<ThirdFormGroupModel>({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(7),
        Validators.pattern('^[A-Za-z][A-Za-z0-9_]{7,29}$'),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phoneNumber: new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9]{10}$'),
      ]),
    });

  mainFormGroup: FormGroup = new FormGroup({
    firstFormGroup: this.firstFormGroup,
    secondFormGroup: this.secondFormGroup,
    thirdFormGroup: this.thirdFormGroup,
  });

  // stepperFormArray: FormArray = new FormArray([]);
  currentStep = 0;

  ngOnInit() {
    this.mainFormGroup = this._formBuilder.group({
      formCount: 1,
      stepData: new FormArray([this.firstFormGroup]),
    });
  }

  getSubmitDataModel() {
    const submitData: UserCRUDSubmitModel['POST'] = {
      email: this.thirdFormGroup.value.email || '',
      username: this.thirdFormGroup.value.username || '',
      phoneNumber: this.thirdFormGroup.value.phoneNumber || '',
      skillsets: this.secondFormGroup.value.skillsets || [],
      jobTitle: this.firstFormGroup.value.jobTitle || '',
    };

    return submitData;
  }

  submit() {
    const formIsValid =
      this.firstFormGroup.valid &&
      this.secondFormGroup.valid &&
      this.thirdFormGroup.valid;

    if (formIsValid) {
      const submitData = this.getSubmitDataModel();
      console.log(submitData);
      this.apiService.createUser(submitData).subscribe({
        next: (response) => {
          const successToastr = this.toastr.success(
            'User created! Rerouting to home page...',
            'Success',
            {
              progressBar: true,
            }
          );

          successToastr.onHidden.subscribe(() => {
            this.router.navigate(['/']);
          });
          this.firstFormGroup.disable();
          this.secondFormGroup.disable();
          this.thirdFormGroup.disable();
        },
        error: (error) => {
          this.toastr.error(error?.message, 'Error');
        },
      });
    } else {
      this.toastr.error('Form is invalid!', 'Error');
    }
  }

  submitDataLog() {
    const submitData = this.getSubmitDataModel();
    console.log(submitData);
    return submitData;
  }

  get stepData() {
    const arrayControl = <FormArray>this.mainFormGroup.controls['stepData'];
    console.log(arrayControl);
    return arrayControl;
  }
}
