// import necessary react testing library helpers here
import { render, screen, fireEvent } from '@testing-library/react';
// import the Counter component here
import Counter from '../components/Counter';

beforeEach(() => {
  // Render the Counter component here
  render(<Counter />);
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  const counterMsg = screen.getByText(/count/i);
  expect(counterMsg).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  const initialCount = screen.getByText(/0/i);
  expect(initialCount).toBeInTheDocument();
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  const button = screen.getByText('+');
  fireEvent.click(button);
  expect(screen.getByText('1')).toBeInTheDocument;
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  const button = screen.getByText('-');
  fireEvent.click(button);
  expect(screen.getByText('-1')).toBeInTheDocument;
});
