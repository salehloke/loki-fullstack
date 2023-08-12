import type { Meta, StoryObj } from '@storybook/angular';
import { UserTableListComponent } from './user-table-list.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<UserTableListComponent> = {
  component: UserTableListComponent,
  title: 'Table/UserTableListComponent',
};
export default meta;
type Story = StoryObj<UserTableListComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/user-table-list works!/gi)).toBeTruthy();
  },
};
