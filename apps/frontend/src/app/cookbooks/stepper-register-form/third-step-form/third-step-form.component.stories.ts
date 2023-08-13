import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { ThirdStepFormComponent } from './third-step-form.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { MatInputModule } from '@angular/material/input';

const meta: Meta<ThirdStepFormComponent> = {
  component: ThirdStepFormComponent,
  title: 'StepperForm/ThirdStepFormComponent',
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [MatInputModule],
    }),
  ],
};
export default meta;
type Story = StoryObj<ThirdStepFormComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/third-step-form works!/gi)).toBeTruthy();
  },
};
