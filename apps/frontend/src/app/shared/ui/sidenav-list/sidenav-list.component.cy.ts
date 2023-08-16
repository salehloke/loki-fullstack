import { TestBed } from '@angular/core/testing';
import { SidenavListComponent } from './sidenav-list.component';

describe(SidenavListComponent.name, () => {
  beforeEach(() => {
    TestBed.overrideComponent(SidenavListComponent, {
      add: {
        imports: [],
        providers: [],
      },
    });
  });

  it('renders', () => {
    cy.mount(SidenavListComponent);
  });
});
