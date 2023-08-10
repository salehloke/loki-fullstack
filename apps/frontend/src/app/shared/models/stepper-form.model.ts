import { FormControl } from '@angular/forms';

export interface FirstFormGroupModel {
  jobTitle: FormControl<string | null>;
}

export interface SecondFormGroupModel {
  skillsets: FormControl<string[] | null>;
}

export interface ThirdFormGroupModel {
  username: FormControl<string | null>;
  email: FormControl<string | null>;
  phoneNumber: FormControl<string | null>;
}

export interface StepperRegisterSubmitModel {
  email: string;
  username: string;
  phoneNumber: string;
  skillsets: string[];
  hobby?: string;
  jobTitle: string;
}
