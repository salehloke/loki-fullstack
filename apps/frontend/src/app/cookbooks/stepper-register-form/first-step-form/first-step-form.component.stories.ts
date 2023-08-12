import type { Meta, StoryObj } from '@storybook/angular';
import { FirstStepFormComponent } from './first-step-form.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<FirstStepFormComponent> = {
  component: FirstStepFormComponent,
  title: 'StepperForm/FirstStepFormComponent',
};
export default meta;
type Story = StoryObj<FirstStepFormComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/first-step-form works!/gi)).toBeTruthy();
  },
};
