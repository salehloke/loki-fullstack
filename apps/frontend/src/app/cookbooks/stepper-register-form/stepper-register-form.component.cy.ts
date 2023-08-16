import { TestBed } from '@angular/core/testing';
import { StepperRegisterFormComponent } from './stepper-register-form.component';
import { findEl } from 'apps/frontend/cypress/support/helper';
import { UserCRUDService } from '../../shared/services/user-crud.service';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { FirstStepFormComponent } from './first-step-form/first-step-form.component';
import { SecondStepFormComponent } from './second-step-form/second-step-form.component';
import { ThirdStepFormComponent } from './third-step-form/third-step-form.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatBadgeModule } from '@angular/material/badge';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatStepperModule } from '@angular/material/stepper';

describe(StepperRegisterFormComponent.name, () => {
  beforeEach(() => {
    TestBed.overrideComponent(StepperRegisterFormComponent, {
      add: {
        imports: [HttpClientModule],
        providers: [
          UserCRUDService,
          ToastrService,

          { provide: ToastrService, useClass: ToastrService },
        ],
      },
    }).compileComponents();
  });

  it('renders', () => {
    cy.mount(StepperRegisterFormComponent, {
      imports: [
        HttpClientModule,
        ToastrModule.forRoot(),
        MatInputModule,
        MatFormFieldModule,
        MatProgressSpinnerModule,
        MatStepperModule,
        MatBadgeModule,
        ReactiveFormsModule,
        FormsModule,

        FirstStepFormComponent,
        SecondStepFormComponent,
        ThirdStepFormComponent,

        NoopAnimationsModule,
      ],
    });
  });

  it('should render the component', () => {
    cy.get('loki-fullstack-stepper-register-form').should('exist');
    cy.get('loki-fullstack-first-step-form').should('exist');

    // make sure the job title input is there
    const jobTitleInput = findEl('jobTitle').should('exist');
  });

  it('[validation] - Required validation', () => {
    const jobTitleInput = findEl('jobTitle').should('exist');
    const nextButton = findEl('first-next').should('exist');
    // TEST: required validation
    jobTitleInput.type(' ');
    nextButton.click();
    cy.get('mat-error').should('exist');
  });

  it('[validation] - minimum length test', () => {
    const jobTitleInput = findEl('jobTitle').should('exist');
    const nextButton = findEl('first-next').should('exist');

    // TEST: minimum-length validation
    jobTitleInput.type('e');
    nextButton.click();
    cy.get('mat-error').should('exist');
  });

  it('[Proceed] - should be able to proceed when the input is valid', () => {
    const jobTitleInput = findEl('jobTitle').should('exist');
    const nextButton = findEl('first-next').should('exist');

    // TEST: Desired value
    jobTitleInput.type('software Developer');
    nextButton.click();
    cy.get('mat-error').should('not.exist');

    cy.wait(1500);

    cy.get('loki-fullstack-second-step-form').should('exist');
    const skillsetsInput = findEl('skillsets').should('exist');
    skillsetsInput.click();
  });

  it('Second step form - Proceed to second step form', () => {
    cy.get('loki-fullstack-second-step-form').should('exist');
  });
});
