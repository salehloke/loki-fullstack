import { Route } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StepperRegisterFormComponent } from './cookbooks/stepper-register-form/stepper-register-form.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'stepper-registration-form',
    component: StepperRegisterFormComponent,
  },
];
