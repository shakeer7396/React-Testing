// TodoList.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TodoList from '../Components/TodoList';

describe('TodoList', () => {
  it('renders the todo list component', () => {
    const { getByText, getByPlaceholderText, getByTestId } = render(
      <TodoList />
    );

    // Verify that the TodoList component renders
    expect(getByText('Todo List')).toBeInTheDocument();

    // Verify that the initial list is empty
    expect(getByTestId('todo-list')).toBeEmptyDOMElement();

    // Add a new todo
    const inputElement = getByPlaceholderText('Add a new todo');
    fireEvent.change(inputElement, { target: { value: 'Buy groceries' } });
    fireEvent.click(getByText('Add Todo'));

    // Verify that the todo is added to the list
    expect(getByTestId('todo-list')).toHaveTextContent('Buy groceries');

    // Remove the todo
    fireEvent.click(getByText('Remove'));

    // Verify that the todo is removed from the list
    expect(getByTestId('todo-list')).toBeEmptyDOMElement();
  });
});
