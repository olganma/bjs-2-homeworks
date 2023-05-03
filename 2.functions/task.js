function getArrayParams(...arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
    sum += arr[i];
  }
  let avg = +(sum / arr.length).toFixed(2);
  return {
    min: min,
    max: max,
    avg: avg
  };
}

function summElementsWorker(...arr) {
  let sum = 0;
  if (arr.length !== 0) {
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
  }
  return sum;
}

function differenceMaxMinWorker(...arr) {
  let min = arr[0];
  let max = arr[0];
  let result = 0;
  if (arr.length !== 0) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }
      if (arr[i] < min) {
        min = arr[i];
      }
      result = max - min;
    }
  }
  return result;
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
  let result = 0;
  if (arr.length !== 0) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        sumEvenElement += arr[i];
      }
      else {
        sumOddElement += arr[i];
      }
    }
  }
  result = sumEvenElement - sumOddElement;
  return result;
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;
  let result = 0;
  if (arr.length !== 0) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        sumEvenElement += arr[i];
        countEvenElement += 1;
      }
      result = sumEvenElement / countEvenElement;
    }
  }
  return result;
}

function makeWork(arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  for (let i = 0; i < arrOfArr.length; i++) {
    for (let arr of arrOfArr) {
      const max = func(...arr);
      if (max > maxWorkerResult) {
        maxWorkerResult = max;
      }
    }
    return maxWorkerResult;
  }
}

