/**
 * in seconds
 */
 export const sleep = (seconds: number) => {
  return new Promise<void>((resolve) => setTimeout(resolve, seconds * 1000));
};

export const delays = {
  session: 0.5,
  me: 1,
  posts: 2,
} as const;