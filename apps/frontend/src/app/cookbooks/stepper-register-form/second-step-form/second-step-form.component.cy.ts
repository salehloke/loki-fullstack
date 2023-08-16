import { TestBed } from '@angular/core/testing';
import { SecondStepFormComponent } from './second-step-form.component';

describe(SecondStepFormComponent.name, () => {
  beforeEach(() => {
    TestBed.overrideComponent(SecondStepFormComponent, {
      add: {
        imports: [],
        providers: [],
      },
    });
  });

  it('renders', () => {
    cy.mount(SecondStepFormComponent);
  });
});
