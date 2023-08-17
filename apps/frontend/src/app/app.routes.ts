import { Route } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StepperRegisterFormComponent } from './cookbooks/stepper-register-form/stepper-register-form.component';
import { UserTableListComponent } from './cookbooks/user-table-list/user-table-list.component';
import { NumberFormComponent } from './cookbooks/number-form/number-form.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'stepper-registration-form',
    component: StepperRegisterFormComponent,
  },
  {
    path: 'cookbooks',
    component: StepperRegisterFormComponent,
  },
  {
    path: 'number-form',
    component: NumberFormComponent,
  },
  {
    path: 'user-list',
    component: UserTableListComponent,
  },
];
