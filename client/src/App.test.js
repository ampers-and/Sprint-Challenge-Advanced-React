import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import App from './App'

afterEach(rtl.cleanup);

   it('renders without crashing', () => {
     // render
   });

  it('renders app title', () => {
    const wrapper = rtl.render(<App />);
    const hasTitle = wrapper.queryByText(/Players/i);
      expect(hasTitle).toBeInTheDocument();
      console.log(wrapper.debug());
  });

  it('renders nav text', () => {
    const wrapper = rtl.render(<App />);
    const hasTitle2 = wrapper.queryByText(/Sprint - Advanced React/i);
      expect(hasTitle2).toBeInTheDocument();
  });

