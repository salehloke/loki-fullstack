/* eslint-disable cypress/no-unnecessary-waiting */
import { findEl } from 'apps/frontend-e2e/src/support/helper';

describe('frontend', () => {
  beforeEach(
    () => cy.visit('#/stepper-registration-form')
    // cy.visit('/iframe.html?id=stepperregisterformcomponent--primary')
  );
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
