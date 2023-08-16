import { TestBed } from '@angular/core/testing';
import { ThirdStepFormComponent } from './third-step-form.component';

describe(ThirdStepFormComponent.name, () => {
  beforeEach(() => {
    TestBed.overrideComponent(ThirdStepFormComponent, {
      add: {
        imports: [],
        providers: [],
      },
    });
  });

  it('renders', () => {
    cy.mount(ThirdStepFormComponent);
  });
});
