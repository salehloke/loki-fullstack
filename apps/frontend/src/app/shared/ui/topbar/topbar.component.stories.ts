import type { Meta, StoryObj } from '@storybook/angular';
import { TopbarComponent } from './topbar.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<TopbarComponent> = {
  component: TopbarComponent,
  title: 'TopbarComponent',
};
export default meta;
type Story = StoryObj<TopbarComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/topbar works!/gi)).toBeTruthy();
  },
};
