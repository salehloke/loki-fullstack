import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { timeout } from 'rxjs';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'loki-fullstack-input-output',
  standalone: true,
  imports: [CommonModule, CustomerDetailsComponent],
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.scss'],
})
export class InputOutputComponent implements OnInit {
  customer: any;

  topupFormGroup = new FormGroup({
    topupAmount: new FormControl(0),
  });

  constructor() {}

  ngOnInit() {
    this.customer = {
      name: 'james',
      address: {
        city: 'enstek',
      },
      topupAmount: 0,
    };

    setTimeout(() => {
      this.customer.name = 'test';
    }, 1000);
  }

  changed(customer: any) {
    this.customer = customer;
  }
}
