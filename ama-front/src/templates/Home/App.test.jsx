/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import Home from '.';
import { theme } from '../../styles/theme';
import React from 'react';


describe('<Home />', () => {
  it('should render home', () => {
    renderTheme(<Home />);
  });
});

