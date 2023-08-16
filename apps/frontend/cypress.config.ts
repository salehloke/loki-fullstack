import { nxComponentTestingPreset } from '@nx/angular/plugins/component-testing';
import { defineConfig } from 'cypress';

export default defineConfig({
  component: nxComponentTestingPreset(__filename),
  fixturesFolder: 'apps/frontend/cypress/fixtures',
  supportFolder: 'apps/frontend/cypress/support',
});
