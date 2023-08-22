import { formatNumber } from '@angular/common';
import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';

@Component({
  selector: 'loki-fullstack-total-amount',
  templateUrl: './total-amount.component.html',
  styleUrls: ['./total-amount.component.scss'],
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
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TotalAmountComponent implements OnInit {
  @Input() selectedForm!: FormGroup;
  @Input() totalAmountController!: FormControl;
  @Input() previousTotalAmountToBePaidController!: FormControl;
  @Input() varianceController!: FormControl;
  @Input() variance2!: number;

  @Output() varianceChanged = new EventEmitter();

  customFormGroup = new FormGroup({
    commaSeparatedValue: new FormControl<number>(0),
    numberValue: new FormControl<number | null>(0),
  });

  ngOnInit(): void {
    this.f.commaSeparatedValue.valueChanges.subscribe((value) => {
      const fromattedNum = value === null ? 0 : value;
      const formattedStr = formatNumber(fromattedNum, 'en-My', '1.2-2');
      console.log('formatted', fromattedNum);
      this.f.numberValue.setValue(fromattedNum);
    });
  }

  calculateVariance() {
    const prevAmount = this.previousTotalAmountToBePaidController.value;
    const currentAmount = this.totalAmountController.value;
    const variance = currentAmount - prevAmount;
    this.variance2 = variance;
    console.log(variance);
    this.varianceChanged.emit(variance);
  }

  get f() {
    return this.customFormGroup.controls;
  }
}
