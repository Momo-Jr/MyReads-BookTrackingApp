import { render, screen } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import SignUpPage from './Signup';

test('renders SignUpPage component', () => {
  render(
    <BrowserRouter>
      <SignUpPage />
    </BrowserRouter>
  );

  expect(screen.getByText('Sign Up Page')).toBeInTheDocument();
  expect(screen.getByLabelText('Email:')).toBeInTheDocument();
  expect(screen.getByLabelText('Password:')).toBeInTheDocument();
  expect(screen.getByLabelText('Confirm Password:')).toBeInTheDocument();
  expect(screen.getByRole('button', { name: 'Sign Up' })).toBeInTheDocument();
});
