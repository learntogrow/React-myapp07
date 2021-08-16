import { render, screen } from '@testing-library/react';
import App from './App';

//checking in virtual dom..not real dom

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
