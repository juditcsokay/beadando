function feladat01(szinek) {
  let numberOfMixtures = 0;
  if (szinek.length <= 1) {
    return numberOfMixtures;
  }
  for (i = 0; i < szinek.length; i++) {
      for (j = i; j < szinek.length-1; j++) {
          if (szinek[i] != szinek[j+1]) {  
            numberOfMixtures++; 
          }
      }
  }
  if (szinek.length > 2) {
    numberOfMixtures++;
  }
  return numberOfMixtures;
}
