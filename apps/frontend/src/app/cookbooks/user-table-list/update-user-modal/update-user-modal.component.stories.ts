import type { Meta, StoryObj } from '@storybook/angular';
import { UpdateUserModalComponent } from './update-user-modal.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<UpdateUserModalComponent> = {
  component: UpdateUserModalComponent,
  title: 'UpdateUserModalComponent',
};
export default meta;
type Story = StoryObj<UpdateUserModalComponent>;

export const Primary: Story = {
  args: {
    id: '',
  },
};

export const Heading: Story = {
  args: {
    id: '',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/update-user-modal works!/gi)).toBeTruthy();
  },
};
