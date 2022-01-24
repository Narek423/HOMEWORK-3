N. 1

function isAllDigitOdd(num, count = 0) {
  if (num === 0 && count > 0) return true;
  if (!(num % 10 % 2)) return false;
  return isAllDigitOdd(Math.floor(num / 10), ++count)
}

N. 2 Array@ aranc poxelu.

function findeMinPosElem(arr, elem = arr[0], i = 1) {
  if (arr.length === i && i !== 1) {
    if(elem >= 0) {
      return elem;
    } else {
      return -1;
    } 
  }
  if (arr.length === 0) return -1;
  if (arr.length === 1) {
    if(elem >= 0) {
      return elem;
    } else {
      return -1;
    } 
  } 
  if (elem >= 0 && arr[i] >= 0) {
    elem = elem < arr[i] ? elem : arr[i];
  } else if (elem < 0 && arr[i] >= 0){
    elem = arr[i];
  } 
  return findeMinPosElem(arr, elem, ++i);
}

N. 2 Array@ poxelov.

function findeMinPosElem(arr, elem = -1) {
  if (arr.length === 0) return elem;
  if (arr[arr.length - 1] >= 0 &&  elem < 0) elem = arr[arr.length - 1]; 
  if (elem >= 0 && arr[arr.length - 1] >= 0) {
    if(arr[arr.length - 1] < elem) elem = arr[arr.length - 1];
  }
  arr.pop();
  return findeMinPosElem(arr, elem);
}

N. 3

function findeIndexOfViolation(arr, i = 0) {
  if (arr.length === i + 1 || arr.length === 0) return -1;
  if (arr[i] > arr[++i]) return i;
  return findeIndexOfViolation(arr, i);
}

N. 4

function remuveFirstElem(arr, i = 0) {
  if (arr.length <= 1) return arr;
  if (arr.length === i) return arr.pop(), arr;
  arr[i] = arr[++i];
  return remuveFirstElem(arr, i);
}

N. 5

function rotatArray(arr, n) {
  if (n === 0 ) return arr;
  if (n > 0) {
    arr.push(arr[0]);
    arr.shift();
    --n;
  } else {
    arr.unshift(arr[arr.length - 1]);
    arr.pop();
    ++n;
  }
  return rotatArray(arr, n);
}