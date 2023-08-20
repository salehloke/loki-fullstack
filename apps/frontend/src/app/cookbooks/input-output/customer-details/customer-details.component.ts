import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'loki-fullstack-customer-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomerDetailsComponent implements OnInit {
  @Input() customer: any;
  @Input() topupFormGroup: FormGroup;
  @Output() customerChanged = new EventEmitter<any>();

  previousValue = 0;
  constructor() {}

  ngOnInit() {}

  change() {
    this.customer.name = 'Michelle Doe';
    console.log(this.customer.name);
    this.previousValue = this.customer.topupAmount;

    this.customerChanged.emit(this.customer);
  }
}
