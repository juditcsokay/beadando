export function feladat01(colors) {
  const numberOfColors = colors.length;
  let numberOfMixtures = 0;
  if (colors.length <= 1) {
    return numberOfMixtures;
  }
  for (let i = colors.length; i > 1; i--) {
    numberOfMixtures +=
      factorial(numberOfColors) /
      (factorial(i) * factorial(numberOfColors - i));
  }
  return numberOfMixtures;
}

function factorial(numberOfColors) {
  let num = 1;
  for (let i = numberOfColors; i > 1; i--) {
    num = num * i;
  }
  return num;
}
