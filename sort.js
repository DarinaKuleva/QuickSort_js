
let num  = [24, 40, 6, 17, 45, 1, 89, 84, 5, 98, 3, 47, 89];

function qSort(num, min, max) {
  let middle = (((min+max) % 2) === 0) ? (min+max)/2 : ((min+max)-1)/2;
  let i = min;
  let j = max;

  while (i <= j)  {
    while (num[i] < num[middle]) {
     i = i+1;
    }
    while (num[j] > num[middle]) {
     j = j-1;
    }

    if (i<=j) {
      let temp = num[i];
      num[i] = num[j];
      num[j] = temp;
      i = i+1;
      j = j-1;
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
qSort (num,0, 12);
console.log (num);




//обьединение 2 массивов
//var g = a.concat(b)
//console.log (g);
