export const getRandomItemFromArray = <T>(array: T[]) =>
  array[Math.floor(Math.random() * array.length)];
