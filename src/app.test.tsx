import { describe, it } from 'vitest';
import { render } from '@testing-library/react';
// import AboutPage from './pages/AboutPage';
import App from './App';

describe('App', () => {
  it('renders headline', () => {
    render(<App />);

    // screen.debug();

    // check if App components renders headline
  });
});
