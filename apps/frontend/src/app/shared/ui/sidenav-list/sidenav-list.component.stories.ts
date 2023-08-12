import type { Meta, StoryObj } from '@storybook/angular';
import { SidenavListComponent } from './sidenav-list.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<SidenavListComponent> = {
  component: SidenavListComponent,
  title: 'SidenavListComponent',
};
export default meta;
type Story = StoryObj<SidenavListComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/sidenav-list works!/gi)).toBeTruthy();
  },
};
