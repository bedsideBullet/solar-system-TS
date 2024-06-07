import { T } from "vitest/dist/types-71ccd11d";

export const minBy = (array: T[], cb: (element: T) => number) => {
  if (array.length === 0) {
    return undefined as T | undefined;
  }
  let minElement: T | undefined = array[0];
  let minVal = cb(array[0] as T);

  for (let i = 1; i < array.length; i++) {
    const value = cb(array[i] as T);
    if (value < minVal) {
      minVal = value;
      minElement = array[i];
    }
  }
  return minElement;
};

export function maxBy(array: T[], cb: (element: T) => number) {
  if (array.length === 0) {
    return undefined as T | undefined;
  }
  let maxElement: T | undefined = array[0];
  let maxVal = cb(array[0] as T);

  for (let i = 1; i < array.length; i++) {
    const value = cb(array[i] as T);
    if (value > maxVal) {
      maxVal = value;
      maxElement = array[i];
    }
  }
  return maxElement;
}
