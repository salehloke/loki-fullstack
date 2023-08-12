import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { UserCRUDSubmitModel } from '../../../shared/models/user-crud.model';
import { UserCRUDService } from '../../../shared/services/user-crud.service';
import {
  RegistrationFormModel,
  UpdateUserFormComponent,
} from '../update-user-form/update-user-form.component';
import { NgSelectModule } from '@ng-select/ng-select';

@Component({
  selector: 'loki-fullstack-update-user-modal',
  standalone: true,
  imports: [CommonModule, UpdateUserFormComponent, NgSelectModule],
  templateUrl: './update-user-modal.component.html',
  styleUrls: ['./update-user-modal.component.scss'],
})
export class UpdateUserModalComponent implements OnInit {
  @Input() id!: string;

  registrationFormGroup: FormGroup<RegistrationFormModel> =
    new FormGroup<RegistrationFormModel>({
      email: new FormControl('', [Validators.required, Validators.email]),
      username: new FormControl('', [Validators.required]),
      phoneNumber: new FormControl('', [
        Validators.required,
        Validators.required,
        Validators.pattern('^[0-9]{10}$'),
      ]),
      skillsets: new FormControl(null, [Validators.required]),
      hobby: new FormControl('', []),
      jobTitle: new FormControl('', [Validators.required]),
    });

  constructor(
    public activeModal: NgbActiveModal,
    private apiService: UserCRUDService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.apiService.getById(this.id).subscribe((data) => {
      this.registrationFormGroup.patchValue({
        email: data.email,
        username: data.username,
        phoneNumber: data.phoneNumber,
        skillsets: data.skillsets,
        hobby: data.hobby,
        jobTitle: data.jobTitle,
      });

      this.registrationFormGroup.controls.email.disable();
      this.registrationFormGroup.controls.username.disable();
    });
  }
  onConfirmUpdate() {
    const submitData = this.getSubmitDataModel();
    if (this.registrationFormGroup.valid) {
      this.apiService.updateUser(this.id, submitData).subscribe({
        next: (response) => {
          this.activeModal.close('update');
          this.toastr.success('User updated!', 'Success');
        },
        error: (error) => {
          this.toastr.error(
            `User update failed! ${error?.message} : error code: ${error?.code}`,
            'Error'
          );
        },
      });
    } else {
      console.log(this.registrationFormGroup);
      this.toastr.error('Form is invalid!', 'Error');
    }
    // this.activeModal.close('delete');
  }

  getSubmitDataModel() {
    const submitData: UserCRUDSubmitModel['PUT'] = {
      phoneNumber: this.registrationFormGroup.value.phoneNumber || '',
      skillsets: this.registrationFormGroup.value.skillsets || [],
      jobTitle: this.registrationFormGroup.value.jobTitle || '',
      hobby: this.registrationFormGroup.value.hobby || '',
      completedAt: new Date(),
    };

    return submitData;
  }
}
