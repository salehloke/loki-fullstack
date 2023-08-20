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
import { debounceTime, distinctUntilChanged, tap } from 'rxjs';
import { TotalAmountComponent } from './total-amount/total-amount.component';

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
    TotalAmountComponent,
  ],
  providers: [provideNgxMask()],
})
export class NumberFormComponent implements OnInit {
  formatted = Number(formatNumber(3.88889, 'en-MY', '1.2-8'));
  varianceVal = 2;

  private fb = inject(FormBuilder);
  topupForm = new FormGroup({
    topupAmount: new FormControl(this.formatted),
    topupCharges: new FormControl(null),
    totalAmountToBePaid: new FormControl<number>(0),
    previousTotalAmountToBePaid: new FormControl<number>(0),
    topupAmountNoNGX: new FormControl(null),
    topupChargesNoNGX: new FormControl(null),
    totalAmountToBePaidNoNGX: new FormControl<number>(0),
    variance: new FormControl<number>(0),
  });

  ngOnInit() {
    setTimeout(() => {
      this.varianceVal = 10;
    }, 500);
    this.topupForm.controls.topupAmount.valueChanges
      .pipe(
        distinctUntilChanged((prev, curr) => {
          return prev === curr;
        }),
        debounceTime(500),
        tap((value) => {
          console.log('prev, curr', value);
        })
      )
      .subscribe((value) => {
        if (this.f.totalAmountToBePaid.value) {
          this.f.previousTotalAmountToBePaid.setValue(
            this.f.totalAmountToBePaid.value
          );
        }
        const targetVal = value?.toFixed(8) ?? 0;
        // const formatted = Number(formatNumber(targetVal, 'en-MY', '1.2'));
        const formatted = Number(targetVal);
        const topupAmount = formatted ?? 0;
        const topupCharges = this.f.topupCharges.value ?? 0;
        console.log('formatNumber', formatNumber(value ?? 0, 'en-MY', '1.2'));
        console.log('TA', topupAmount);
        console.log('TC', topupCharges);
        const totalAmountToBePaid = topupAmount + topupCharges;
        this.f.totalAmountToBePaid.setValue(totalAmountToBePaid);
      });

    this.f.totalAmountToBePaid.valueChanges
      .pipe(distinctUntilChanged(), debounceTime(500))
      .subscribe((value) => {
        console.log('touched', this.f.totalAmountToBePaid.touched);
        console.log('dirty', this.f.totalAmountToBePaid.dirty);
        if (this.f.totalAmountToBePaid.dirty) {
          // if the final amount not edited
          const prevAmount = this.f.previousTotalAmountToBePaid.value ?? 0;
          const currentAmount = this.f.totalAmountToBePaid.value ?? 0;
          const variance = currentAmount - prevAmount;
          this.f.variance.setValue(variance);
        }
      });

    this.topupForm.controls.topupCharges.valueChanges
      .pipe(
        distinctUntilChanged(),
        debounceTime(500),
        tap((value) => {
          console.log('value', value);
        })
      )
      .subscribe((value) => {
        this.f.previousTotalAmountToBePaid.setValue(
          this.f.totalAmountToBePaid.value
        );
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

  varianceChanges(varianceAmount: number) {
    this.varianceVal = varianceAmount;
    console.log('variance Amount', varianceAmount);
  }

  hasUnitNumber = false;

  get f() {
    return this.topupForm.controls;
  }

  onSubmit(): void {
    alert('Thanks!');
  }
}
