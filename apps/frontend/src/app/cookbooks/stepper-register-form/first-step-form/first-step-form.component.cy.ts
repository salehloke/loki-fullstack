import { TestBed } from '@angular/core/testing';
import { FirstStepFormComponent } from './first-step-form.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { findEl } from 'apps/frontend/cypress/support/helper';

describe(FirstStepFormComponent.name, () => {
  beforeEach(() => {
    TestBed.overrideComponent(FirstStepFormComponent, {
      add: {
        imports: [
          CommonModule,
          MatInputModule,
          MatFormFieldModule,
          ReactiveFormsModule,
          FormsModule,
        ],
        providers: [],
      },
    });
  });

  it('renders', () => {
    cy.mount(FirstStepFormComponent, {
      imports: [
        CommonModule,
        MatInputModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        FormsModule,
        NoopAnimationsModule,
      ],
    });
  });

  it('[validation] - Required validation', () => {
    const jobTitleInput = findEl('jobTitle').should('exist');
    // const nextButton = findEl('first-next').should('exist');
    // TEST: required validation
    jobTitleInput.type(' ');
    // nextButton.click();
    cy.get('mat-error').should('exist');
  });
});
