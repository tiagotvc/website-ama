import { DropDown } from '.';
import React from  'react';

export default {
  title: 'DropDown',
  component: DropDown,
  args: {
    children: 'DropDown',
  },
};

export const Template = () => {
  return (
    <div style={{ display: 'flex' }}>
      <DropDown />
    </div>
  );
};