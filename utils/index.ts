/**
 * in seconds
 */
 export const sleep = (seconds: number) => {
  return new Promise<void>((resolve) => setTimeout(resolve, seconds * 1000));
};

export const getRandomInteger = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};