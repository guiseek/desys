import { Story, Meta } from '@storybook/react';
import { Button, ButtonProps } from './button';

export default {
  component: Button,
  title: 'Button',
} as Meta;

const Template: Story<ButtonProps> = ({ children, ...props }: ButtonProps) => (
  <Button {...props}>{children}</Button>
);

export const Primary = Template.bind({});

Primary.args = {
  children: 'Primary',
};
