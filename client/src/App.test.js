import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import App from './App'

it('renders app text', () => {
  const wrapper = rtl.render(<App />);
  const hasTitle = wrapper.queryByText(/Players/i);
     expect(hasTitle).toBeInTheDocument();
});