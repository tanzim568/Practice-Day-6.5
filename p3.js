const res = (array) => {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] > array[j]) {
          // console.log(array[i], array[j]);
          let tmp = array[j]
          let a = array[i]
          array[i] = tmp
          array[j]=a
          
      }
    }
  }
  return array;
};

const array = [1, 2, 7, 4, 5, 6, 3, 8, 9, 10];
console.log(...res(array));
