import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

describe('App Component', () => {
  test('renders the Framework Zero title', () => {
    render(<App />);
    const titleElement = screen.getByRole('heading', { name: /Framework Zero/i, level: 1 });
    expect(titleElement).toBeInTheDocument();
  });

  test('renders the subtitle', () => {
    render(<App />);
    const subtitleElement = screen.getByRole('heading', { name: /for the Post-Labor Economy/i, level: 2 });
    expect(subtitleElement).toBeInTheDocument();
  });

  test('renders the Get Involved button', () => {
    render(<App />);
    const button = screen.getByText(/Get Involved/i);
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('href', 'https://docs.google.com/forms/d/e/1FAIpQLSfAms8ENSZhoMYtZ0Q-Iv341s_On_lYkvQF5qC5BXbFdEUe8Q/viewform');
  });

  test('renders the logo image', () => {
    render(<App />);
    const logo = screen.getByAltText(/Framework Zero Logo/i);
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('src', '/images/logo.png');
  });
}); 