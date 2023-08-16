import { TestBed } from '@angular/core/testing';
import { TopbarComponent } from './topbar.component';

describe(TopbarComponent.name, () => {
  beforeEach(() => {
    TestBed.overrideComponent(TopbarComponent, {
      add: {
        imports: [],
        providers: [],
      },
    });
  });

  it('renders', () => {
    cy.mount(TopbarComponent);
  });
});
