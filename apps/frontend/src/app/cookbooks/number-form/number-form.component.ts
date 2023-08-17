import { Component, inject, OnInit } from '@angular/core';

import {
  ReactiveFormsModule,
  FormBuilder,
  Validators,
  FormGroup,
  FormControl,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';

@Component({
  selector: 'loki-fullstack-number-form',
  templateUrl: './number-form.component.html',
  styleUrls: ['./number-form.component.css'],
  standalone: true,
  imports: [
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    NgxMaskDirective,
    NgxMaskPipe,
  ],
  providers: [provideNgxMask()],
})
export class NumberFormComponent implements OnInit {
  private fb = inject(FormBuilder);
  topupForm = new FormGroup({
    topupAmount: new FormControl(null),
    topupCharges: new FormControl(null),
    totalAmountToBePaid: new FormControl<number>(0),
  });

  ngOnInit() {
    this.topupForm.controls.topupAmount.valueChanges.subscribe((value) => {
      const topupAmount = value ?? 0;
      const topupCharges = this.f.topupCharges.value ?? 0;

      const totalAmountToBePaid = topupAmount + topupCharges;
      this.f.totalAmountToBePaid.setValue(totalAmountToBePaid);
    });

    this.topupForm.controls.topupCharges.valueChanges.subscribe((value) => {
      const topupAmount = this.f.topupAmount.value ?? 0;
      const topupCharges = this.f.topupCharges.value ?? 0;

      const totalAmountToBePaid = topupAmount + topupCharges;
      this.f.totalAmountToBePaid.setValue(totalAmountToBePaid);
    });
  }

  hasUnitNumber = false;

  get f() {
    return this.topupForm.controls;
  }

  onSubmit(): void {
    alert('Thanks!');
  }
}
