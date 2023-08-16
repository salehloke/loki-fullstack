import { TestBed } from '@angular/core/testing';
import { DeleteUserModalComponent } from './delete-user-modal.component';

describe(DeleteUserModalComponent.name, () => {
  beforeEach(() => {
    TestBed.overrideComponent(DeleteUserModalComponent, {
      add: {
        imports: [],
        providers: [],
      },
    });
  });

  it('renders', () => {
    cy.mount(DeleteUserModalComponent, {
      componentProperties: {
        country: 'delete record!',
        id: '',
      },
    });
  });
});
