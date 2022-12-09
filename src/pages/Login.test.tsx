import React from 'react';
import { render } from '@testing-library/react';
import Login from './Login';

test('page should have a text of Login', async () => {
  const { findByText } = render(<Login />);
  await findByText('Login');
});