import { describe, it } from 'vitest';
import { render } from '@testing-library/react';
import AboutPage from './pages/AboutPage';

describe('App', () => {
  it('renders headline', () => {
    render(<AboutPage />);

    // screen.debug();

    // check if App components renders headline
  });
});
