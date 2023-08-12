import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { StepperRegisterFormComponent } from './stepper-register-form.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { FirstStepFormComponent } from './first-step-form/first-step-form.component';
import { SecondStepFormComponent } from './second-step-form/second-step-form.component';

const meta: Meta<StepperRegisterFormComponent> = {
  component: StepperRegisterFormComponent,
  title: 'StepperForm/StepperRegisterFormComponent',

  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [FirstStepFormComponent, SecondStepFormComponent],
    }),
  ],
};
export default meta;
type Story = StoryObj<StepperRegisterFormComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/stepper-register-form works!/gi)).toBeTruthy();
  },
};
