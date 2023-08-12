import type { Meta, StoryObj } from '@storybook/angular';
import { SecondStepFormComponent } from './second-step-form.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<SecondStepFormComponent> = {
  component: SecondStepFormComponent,
  title: 'StepperForm/SecondStepFormComponent',
};
export default meta;
type Story = StoryObj<SecondStepFormComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/second-step-form works!/gi)).toBeTruthy();
  },
};
