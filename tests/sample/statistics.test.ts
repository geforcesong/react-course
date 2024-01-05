import { describe, it, expect } from 'vitest';

import { calculateKendallTau } from '../../src/hooks/statistics';

const numDigits = 3;

describe('calculateKendallTau', () => {
  it('should calculate the Kendall correlation coefficient (tau) correctly', () => {
    // Test case 1: Perfect positive correlation
    const x1 = [1, 2, 3, 4, 5];
    const y1 = [1, 2, 3, 4, 5];
    expect(calculateKendallTau(x1, y1)).toBe(1);

    // Test case 2: Perfect negative correlation
    const x2 = [5, 4, 3, 2, 1];
    const y2 = [1, 2, 3, 4, 5];
    expect(calculateKendallTau(x2, y2)).toBe(-1);

    // Test case 3: Some negative correlation
    const x3 = [1, 3, 5, 2, 4];
    const y3 = [2, 4, 1, 5, 3];
    expect(calculateKendallTau(x3, y3)).toBeCloseTo(-0.4, numDigits);
  });
});
