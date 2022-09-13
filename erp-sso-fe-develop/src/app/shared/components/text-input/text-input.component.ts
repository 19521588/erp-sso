import { Component, forwardRef, Input, OnInit } from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  FormBuilder,
  FormControl,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { ErrorMessages } from './error-messages';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextInputComponent),
      multi: true,
    },
  ],
})
export class TextInputComponent implements ControlValueAccessor, OnInit {
  private _value?: string;
  inputType?: 'password' | 'text';
  touch = false
  checkicon = '/assets/icons/NonEyeSlash.svg';
  @Input() isPassword?: boolean;
  @Input() title?: string = ''
  @Input()
  set value(value: string) {
    if (this.onChanged) {
      this.onChanged(value);
    }
    this._value = value;
  }
  get value(): string {
    return this._value ?? '';
  }

  @Input() formFieldControl: AbstractControl = new FormControl();

  @Input() errrorMessages: ErrorMessages = {};

  get firstErrorMessage() {
    const errors = this.formFieldControl.errors;
    if (!errors) {
      return undefined;
    }
    const firstError = Object.keys(errors).find((error) => errors[error]);
    if (firstError) {
      let message = this.errrorMessages[firstError];
      if (message instanceof Function) {
        message = message(errors[firstError]);
      }
      if (message) {
        return message;
      } else {
        return `[Error ${firstError}]`;
      }
    } else {
      return undefined;
    }
  }
  
  onChanged?: (value: string) => void;
  onTouched: () => void = () => {
    // do nothing for default
  };
  constructor(private f: FormBuilder) { }
  ngOnInit(): void {
    this.inputType = this.isPassword ? 'password' : 'text';
  }

  writeValue(value: string): void {
    this.value = value;
  }

  registerOnChange(fn: (value: string) => never): void {
    this.onChanged = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  focusOutFunction(){
    this.touch = !this.touch
  }
  focusFunction(){
    this.touch = false
  }

  toggleEyeIcon() {
    if (this.inputType === 'password') {
      this.checkicon = '/assets/icons/EyeSlash.svg';
      this.inputType = 'text';
    } else {
      this.inputType = 'password';
      this.checkicon = '/assets/icons/NonEyeSlash.svg';
    }
  }
}
