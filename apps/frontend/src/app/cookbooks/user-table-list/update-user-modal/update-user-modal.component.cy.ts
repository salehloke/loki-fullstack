import { TestBed } from '@angular/core/testing';
import { UpdateUserModalComponent } from './update-user-modal.component';

describe(UpdateUserModalComponent.name, () => {
  beforeEach(() => {
    TestBed.overrideComponent(UpdateUserModalComponent, {
      add: {
        imports: [],
        providers: [],
      },
    });
  });

  it('renders', () => {
    cy.mount(UpdateUserModalComponent, {
      componentProperties: {
        id: '',
      },
    });
  });
});
