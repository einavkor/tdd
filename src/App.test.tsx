import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

describe('when app is rendered', () => {

  test('should render increment button', () => {
    render(<App />);

    expect(screen.getByTestId('increment-button')).toBeInTheDocument();
  });

  test('should initiate counter with 0', () => {
    render(<App />);
    expect(screen.getByTestId('counter')).toBeInTheDocument();
  });

  test('should initiate a counter with 0 text', () => {
    render(<App />);
    expect(screen.getByTestId('counter')).toHaveTextContent('Counter: 0');
  });

  describe('when click on increment button', () => {
    test('should increment counter', async () => {
      render(<App />);
      const incrementButton = screen.getByTestId('increment-button');
      const counter = screen.getByTestId('counter');
      fireEvent.click(incrementButton);
      expect(counter).toHaveTextContent('Counter: 1');
    });
  });

  describe('when click twice on increment button', () => {
    test('should increment counter', async () => {
      render(<App />);
      const incrementButton = screen.getByTestId('increment-button');
      const counter = screen.getByTestId('counter');
      fireEvent.click(incrementButton);
      fireEvent.click(incrementButton);
      expect(counter).toHaveTextContent('Counter: 2');
    });
  });

  describe('when click on decrement button', () => {
    test('should increment counter', async () => {
      render(<App />);
      const counter = screen.getByTestId('counter');
      const decrementButton = screen.getByTestId('decrement-button');
      fireEvent.click(decrementButton);

      expect(counter).toHaveTextContent('Counter: -1');
    });
  });

  describe('when click on reset button', () => {
    test('should reset counter', async () => {
      render(<App />);
      const counter = screen.getByTestId('counter');
      const incrementButton = screen.getByTestId('increment-button');
      const resetButton = screen.getByTestId('reset-button');
      fireEvent.click(incrementButton);
      fireEvent.click(incrementButton);
      fireEvent.click(resetButton);
      expect(counter).toHaveTextContent('Counter: 0');
    }
  )
});

})