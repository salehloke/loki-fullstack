import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { TopbarComponent } from './shared/ui/topbar/topbar.component';
import { UniversalLayoutComponent } from './shared/ui/universal-layout/universal-layout.component';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatBadgeModule } from '@angular/material/badge';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatStepperModule } from '@angular/material/stepper';
import { FirstStepFormComponent } from './cookbooks/stepper-register-form/first-step-form/first-step-form.component';
import { SecondStepFormComponent } from './cookbooks/stepper-register-form/second-step-form/second-step-form.component';
import { ThirdStepFormComponent } from './cookbooks/stepper-register-form/third-step-form/third-step-form.component';
import { StepperRegisterFormComponent } from './cookbooks/stepper-register-form/stepper-register-form.component';
import { TotalAmountComponent } from './cookbooks/number-form/total-amount/total-amount.component';
import { DecimalNumberFormatterDirective } from './shared/directives/decimal-number-formatter.directive';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    StepperRegisterFormComponent,
    // DecimalNumberFormatterDirective,
  ],
  // exports: [DecimalNumberFormatterDirective],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, {
      initialNavigation: 'enabledBlocking',
      useHash: true,
    }),
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    TopbarComponent,
    UniversalLayoutComponent,
    ToastrModule.forRoot(), // ToastrModule added

    MatInputModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatStepperModule,
    MatBadgeModule,
    FirstStepFormComponent,
    SecondStepFormComponent,
    ThirdStepFormComponent,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
