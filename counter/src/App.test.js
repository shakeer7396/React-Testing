import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Counter from './Components/Counter';

test('renders learn react link', () => {
  render(<Counter />);
  const increaseBtn = screen.getByText("Increase")
  const decreaseBtn = screen.getByText(/decrease/i)
  const counter = screen.getByText("0")
  userEvent.click(increaseBtn);
  expect(counter).toHaveTextContent("1")
  userEvent.click(decreaseBtn);
  expect(counter).toHaveTextContent("0");

});