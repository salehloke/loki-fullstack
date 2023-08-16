import { TestBed } from '@angular/core/testing';
import { UserTableListComponent } from './user-table-list.component';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

describe(UserTableListComponent.name, () => {
  beforeEach(() => {
    TestBed.overrideComponent(UserTableListComponent, {
      add: {
        imports: [CommonModule, MatIconModule],
        providers: [],
      },
    });
  });

  it('renders', () => {
    cy.mount(UserTableListComponent);
  });
});
