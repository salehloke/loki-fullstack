import { TestBed } from '@angular/core/testing';
import { UniversalLayoutComponent } from './universal-layout.component';

describe(UniversalLayoutComponent.name, () => {
  beforeEach(() => {
    TestBed.overrideComponent(UniversalLayoutComponent, {
      add: {
        imports: [],
        providers: [],
      },
    });
  });

  it('renders', () => {
    cy.mount(UniversalLayoutComponent);
  });
});
