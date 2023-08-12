import type { Meta, StoryObj } from '@storybook/angular';
import { DeleteUserModalComponent } from './delete-user-modal.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<DeleteUserModalComponent> = {
  component: DeleteUserModalComponent,
  title: 'DeleteUserModalComponent',
};
export default meta;
type Story = StoryObj<DeleteUserModalComponent>;

export const Primary: Story = {
  args: {
    country: 'delete record!',
    id: '',
  },
};

export const Heading: Story = {
  args: {
    country: 'delete record!',
    id: '',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/delete-user-modal works!/gi)).toBeTruthy();
  },
};
