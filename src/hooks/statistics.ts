export type MetricsToggleProps = {
  data: {
    mue?: [number, number];
    rmse?: [number, number];
    r2_pearson: [number, number];
    rho_spearman: [number, number];
    tau_kendall: [number, number];
  };
};

export const FIELD_IDS = {
  FEP_PREDICTED: 'predict_deltaG',
  FEP_EXPERIMENT: 'exp_deltaG',
  MW: 'MW',
} as const;

export function calculateMUE(x: number[], y: number[]) {
  const n = x.length;
  let mue = 0;
  for (let i = 0; i < n; i++) {
    mue += Math.abs(x[i] - y[i]);
  }
  return mue / n;
}

export function calculateRMSE(x: number[], y: number[]) {
  const n = x.length;
  let rmse = 0;
  for (let i = 0; i < n; i++) {
    const diff = x[i] - y[i];
    rmse += diff * diff;
  }
  return Math.sqrt(rmse / n);
}

export function calculatePearsonR2(x: number[], y: number[]) {
  const n = x.length;
  let sumX = 0;
  let sumY = 0;
  let sumXY = 0;
  let sumX2 = 0;
  let sumY2 = 0;
  for (let i = 0; i < n; i++) {
    sumX += x[i];
    sumY += y[i];
    sumXY += x[i] * y[i];
    sumX2 += x[i] * x[i];
    sumY2 += y[i] * y[i];
  }
  const numerator = n * sumXY - sumX * sumY;
  const denominatorX = Math.sqrt(n * sumX2 - sumX * sumX);
  const denominatorY = Math.sqrt(n * sumY2 - sumY * sumY);
  return Math.pow(numerator / (denominatorX * denominatorY), 2);
}

export function calculateKendallTau(x: number[], y: number[]) {
  const n = x.length;
  let concordantPairs = 0;
  let discordantPairs = 0;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      const diffX = x[i] - x[j];
      const diffY = y[i] - y[j];
      if (diffX * diffY > 0) {
        concordantPairs++;
      } else if (diffX * diffY < 0) {
        discordantPairs++;
      }
    }
  }
  return (concordantPairs - discordantPairs) / ((n * (n - 1)) / 2);
}
