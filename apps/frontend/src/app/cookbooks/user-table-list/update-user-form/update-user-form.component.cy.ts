import { TestBed } from '@angular/core/testing';
import { UpdateUserFormComponent } from './update-user-form.component';

describe(UpdateUserFormComponent.name, () => {
  beforeEach(() => {
    TestBed.overrideComponent(UpdateUserFormComponent, {
      add: {
        imports: [],
        providers: [],
      },
    });
  });

  it('renders', () => {
    cy.mount(UpdateUserFormComponent, {
      componentProperties: {
        id: '',
      },
    });
  });
});
