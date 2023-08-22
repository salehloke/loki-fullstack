import { formatNumber } from '@angular/common';
import { Directive, ElementRef, HostListener } from '@angular/core';
import { debounceTime, distinctUntilChanged, fromEvent } from 'rxjs';

@Directive({
  selector: '[decimalNumberFormatter]',
  standalone: true,
})
export class DecimalNumberFormatterDirective {
  constructor(private _inputEl: ElementRef) {
    fromEvent(_inputEl.nativeElement, 'keyup')
      .pipe(
        // distinctUntilChanged(),
        debounceTime(500)
      )
      .subscribe((res) => {
        console.log('fromEvent', _inputEl.nativeElement.value);
        // const inputValue = _inputEl.nativeElement.value;
        // if (inputValue) {
        //   const formatted = formatNumber(inputValue, 'en-My', '1.2-2');
        //   _inputEl.nativeElement.value = formatted;
        // }
      });
  }

  @HostListener('input', ['$event'])
  onInput(event: any) {
    // console.log(event);
    if (this._inputEl.nativeElement.value === '-') return;
    let commasRemoved = this._inputEl.nativeElement.value.replace(/,/g, '');
    let toInt: number;
    let toLocale: string;
    if (commasRemoved.split('.').length > 1) {
      let decimal = isNaN(parseInt(commasRemoved.split('.')[1]))
        ? ''
        : parseInt(commasRemoved.split('.')[1]);
      toInt = parseInt(commasRemoved);
      toLocale = toInt.toLocaleString('en-US') + '.' + decimal;
    } else {
      toInt = parseInt(commasRemoved);
      toLocale = toInt.toLocaleString('en-US');
    }
    if (toLocale === 'NaN') {
      this._inputEl.nativeElement.value = '';
    } else {
      this._inputEl.nativeElement.value = toLocale;
    }
  }
}
