import { Component, inject, OnInit, LOCALE_ID } from '@angular/core';

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
import { formatNumber } from '@angular/common';

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
  formatted = Number(formatNumber(3.88889, 'en-MY', '1.2-8'));
  private fb = inject(FormBuilder);
  topupForm = new FormGroup({
    topupAmount: new FormControl(this.formatted),
    topupCharges: new FormControl(null),
    totalAmountToBePaid: new FormControl<number>(0),
    topupAmountNoNGX: new FormControl(null),
    topupChargesNoNGX: new FormControl(null),
    totalAmountToBePaidNoNGX: new FormControl<number>(0),
  });

  ngOnInit() {
    this.topupForm.controls.topupAmount.valueChanges.subscribe((value) => {
      const formatted = Number(formatNumber(value ?? 0, 'en-MY', '1.2'));
      const topupAmount = formatted ?? 0;
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

    this.topupForm.controls.topupAmountNoNGX.valueChanges.subscribe((value) => {
      const topupAmount = value ?? 0;
      const topupCharges = this.f.topupChargesNoNGX.value ?? 0;

      const totalAmountToBePaid = topupAmount + topupCharges;
      this.f.totalAmountToBePaidNoNGX.setValue(totalAmountToBePaid);
    });

    this.topupForm.controls.topupChargesNoNGX.valueChanges.subscribe(
      (value) => {
        const topupAmount = this.f.topupAmountNoNGX.value ?? 0;
        const topupCharges = this.f.topupChargesNoNGX.value ?? 0;

        const totalAmountToBePaid = topupAmount + topupCharges;
        this.f.totalAmountToBePaidNoNGX.setValue(totalAmountToBePaid);
      }
    );
  }

  onTopupAmountChanges() {
    const topupAmount = this.f.topupAmount.value;
    const formatted = topupAmount?.toFixed(4) ?? 0;
    this.f.topupAmount.setValue(Number(formatted));
  }

  hasUnitNumber = false;

  get f() {
    return this.topupForm.controls;
  }

  onSubmit(): void {
    alert('Thanks!');
  }
}
