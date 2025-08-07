function ArrayLenght(arr) {
  let count = 0;
  for (let i = 0; arr[i] !== undefined; i++) {
    count++;
  }
  return count;
}

function ArrayLastElement(arr) {
  const arrlengths = ArrayLenght(arr);
  const lastelement = arr[arrlengths - 1];
  return lastelement;
}

function AddElement(arr, ...value) {
  console.log(value);
  const valueLenght = ArrayLenght(value);
  for (let i = 0; i < valueLenght; i++) {
    let arrlength = ArrayLenght(arr);
    arr[arrlength] = value[i];
  }
  return arr;
}

function AddBegin(arr, ...value) {
  let arrLength = ArrayLenght(arr);
  let valLength = ArrayLenght(value);
  let arr1 = [];
  for (let i = 0; i < valLength; i++) {
    arr1[i] = value[i];
  }
  for (let j = 0; j < arrLength; j++) {
    arr1[valLength + j] = arr[j];
  }
  return arr1;
}

function IDArray(arr, val) {
  let arrLength = ArrayLenght(arr);
  arrLength = val;
  let arr1 = [];
  for (let i = 0; i < arrLength; i++) {
    arr1[i] = arr[i] || null;
  }
  return arr1;
}

function RemoveElement(arr) {
  const arrLength = ArrayLenght(arr);
  let arr1 = [];
  for (let i = 0; i < arrLength - 1; i++) {
    arr1[i] = arr[i];
  }
  return arr1;
}

function RemoveElementBegin(arr) {
  const arrLength = ArrayLenght(arr);
  let arr1 = [];
  for (let i = 0; i < arrLength - 1; i++) {
    arr1[i] = arr[i + 1];
  }
  return arr1;
}

function ArrayConcate(arr, ...arr2) {
  // console.log(arr2)
  // console.log(arr)
  const arr1Length = ArrayLenght(arr);
  let arraysLength = ArrayLenght(arr2);
  let resultArr = [];
  console.log(arr1Length, arraysLength);
  for (let i = 0; i < arr1Length; i++) {
    resultArr[i] = arr[i];
  }
  for (let i = 0; i < arraysLength; i++) {
    let current = arr2[i];
    let iLength = ArrayLenght(arr2[i]);
    for (let j = 0; j < iLength; j++) {
      resultArr[arr1Length + j] = current[j];
    }
    if (arraysLength > 1) {
      arr1Length += iLength;
    }
  }
  return resultArr;
}

function ArraytoString(arr) {
  const arrLength = ArrayLenght(arr);
  let string = "";
  for (let i = 0; i < arrLength; i++) {
    if (i < arrLength - 1) {
      string += `${arr[i]},`;
    } else {
      string += `${arr[i]}`;
    }
  }
  return string;
}

function FlatenArray(arr) {
  const arrLength = ArrayLenght(arr);
  let resultArr = [];
  let resultArrLength = 0;
  for (let i = 0; i < arrLength; i++) {
    let current = arr[i];
    const currentLength = ArrayLenght(arr[i]);
    console.log(current);
    if (currentLength === 0) {
      resultArr[resultArrLength] = arr[i];
    } else {
      for (let j = 0; j < currentLength; j++) {
        resultArr[resultArrLength + j] = current[j];
      }
      // resultArrLength = ArrayLenght(resultArr)
    }
    resultArrLength = ArrayLenght(resultArr);
  }
  return resultArr;
}

function IndexFind(arr, val) {
  const arrLength = ArrayLenght(arr);
  let index = -1;
  for (let i = 0; i < arrLength; i++) {
    if (arr[i] === val) {
      index = i;
      break;
    }
  }
  return index;
}

function SliceArray(arr, ...values) {
  const arrLength = ArrayLenght(arr);
  const start = values[0];
  const end = values[1] || arrLength;
  let resultArr = [];
  console.log(start);
  console.log(end);
  let j = 0;
  for (let i = start; i < end; i++) {
    resultArr[j] = arr[i];
    j++;
  }
  return resultArr;
}

function AscSort(arr) {
  const arrLength = ArrayLenght(arr);
  for (let i = 0; i < arrLength; i++) {
    for (let j = 0; j < arrLength; j++) {
      if (arr[i] < arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

function DesSort(arr) {
  const arrLength = ArrayLenght(arr);
  for (let i = 0; i < arrLength; i++) {
    for (let j = 0; j < arrLength; j++) {
      if (arr[i] > arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

function ArrayReverse(arr) {
  const arrLength = ArrayLenght(arr);
  let newArr = [];
  for (let i = 0; i < arrLength; i++) {
    for (let j = 0; j < arrLength; j++) {
      if (j + i === arrLength - 1) {
        newArr[i] = arr[j];
      }
    }
  }
  return newArr;
}

function BubbleSort(arr1) {
  let a = 0;
  let temp;
  while (a < arr1.length) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] > arr1[i + 1]) {
        temp = arr1[i];
        arr1[i] = arr1[i + 1];
        arr1[i + 1] = temp;
      }
    }
    a++;
  }
  return arr1;
}

function SelectSort(arr1) {
  for (let i = 0; i < arr1.length; i++) {
    let minimum = i;
    for (let j = i + 1; j < arr1.length; j++) {
      if (arr1[j] < arr1[minimum]) {
        minimum = j;
      }
    }
    let temp = arr1[i];
    arr1[i] = arr1[minimum];
    arr1[minimum] = temp;
    // console.log(`Array is ${arr1}`)
  }
  return arr1;
}

function FindMax(arr) {
  const arrLength = ArrayLenght(arr);
  let max = 0;
  for (let i = 0; i < arrLength; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

function FindMin(arr) {
  const arrLength = ArrayLenght(arr);
  let min = arr[0];
  for (let i = 1; i < arrLength; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}

function SumArray(arr) {
  const arrLength = ArrayLenght(arr);
  let sum = 0;
  for (let i = 0; i < arrLength; i++) {
    sum += arr[i];
  }
  return sum;
}

function ProArray(arr) {
  const arrLength = ArrayLenght(arr);
  let pro = arr[0];
  for (let i = 1; i < arrLength; i++) {
    pro *= arr[i];
  }
  return pro;
}

function ArrayMultipleOf(arr, val) {
  const arrLength = ArrayLenght(arr);
  for (let i = 0; i < arrLength; i++) {
    arr[i] *= val;
  }
  return arr;
}

function ForEachArray(arr, callback) {
  const arrLength = ArrayLenght(arr);
  for (let i = 0; i < arrLength; i++) {
    callback(arr[i], i, arr);
  }
}

function mapArray(arr, callback) {
  const arrLength = ArrayLenght(arr);
  let result = [];
  for (let i = 0; i < arrLength; i++) {
    result[i] = callback(arr[i], i, arr);
  }
  return result;
}

function filterArray(arr, callback) {
  const arrLength = ArrayLenght(arr);
  let result = [];
  let newindex = 0;
  for (let i = 0; i < arrLength; i++) {
    if (callback(arr[i], i, arr)) {
      result[newindex] = arr[i];
      newindex++;
    }
  }
  return result;
}
