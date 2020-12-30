export const shuffleArray = (arr: Array<any>): Array<any> =>
  arr.sort(() => Math.random() - 0.5);
export const randomNumber = (min: number, max: number): number =>
  Math.floor(Math.random() * (max - min + 1)) + min;
