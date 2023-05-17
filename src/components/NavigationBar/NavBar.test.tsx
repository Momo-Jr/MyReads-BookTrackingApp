import { render, screen } from '@testing-library/react';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './NavBar';

describe('NavBar', () => {
  test('renders the logo and login button', () => {
    render(
      <Router>
        <NavBar />
      </Router>
    );

    // Assert the presence of the logo text
    const logoText = screen.getByText('MyReads App');
    expect(logoText).toBeInTheDocument();

    // Assert the presence of the login button
    const loginButton = screen.getByRole('link', { name: 'Login' });
    expect(loginButton).toBeInTheDocument();
    expect(loginButton.getAttribute('href')).toBe('/login');
  });
});
