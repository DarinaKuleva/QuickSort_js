let num = [24, 40, 6, 17, 45, 1, 56, 84, 5, 98, 3, 47, 89];

function swap(i, j) {
  let temp = num[i];
  num[i] = num[j];
  num[j] = temp;
  ++i;
  ++j;

}

function qSort(num, min, max) {
  let ArrayLangth = num.length;
  let middle = ((ArrayLangth % 2) === 0) ? ArrayLangth/2 : (ArrayLangth-1)/2
  let i = min;
  let j = max;

  while (i < j)  {
    while (num[i] < num[middle]) {
     ++i;
    }
    while (num[j] > num[middle]) {
      --j;
    }

    if (i<=j) {
      swap(i, j)
    }
  }

  if (j > min) {
    qSort (num, min, j);
  }

  if (i < max) {
    qSort (num, i, max)
  }

}

console.log (num);
//qSort (num, 0, 12);
console.log (num);




//обьединение 2 массивов
var g = a.concat(b)
console.log (g);
