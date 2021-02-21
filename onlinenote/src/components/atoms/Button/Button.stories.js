import React from 'react';
import { withKnobs, select } from '@storybook/addon-knobs';
import Button from './Button';

export default {
  title: 'Button',
  component: Button,
  decorators: [withKnobs],
};

export const primary = () => {
  const label = 'Colors';
  const options = {
    Primary: 'hsl(49, 100%, 58%)',
    Secondary: 'hsl(196, 83%,75%)',
    Tertiary: 'hsl(106, 47%, 64%)',
  };

  const defaultValue = 'red';
  const groupId = 'GROUP-ID1';

  const value = select(label, options, defaultValue, groupId);
  return (
    <Button primary color={value}>
      Button
    </Button>
  );
};

export const secondary = () => <Button secondary>Button</Button>;
