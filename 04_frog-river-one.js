# URL: https://codility.com/programmers/lessons/4-counting_elements/frog_river_one/

function solution(X, A) {
  var arr = [];
  var sum = (X + 1) * X / 2;
  for (var i = 0, len = A.length; i < len; i++) {
    if (arr[A[i]] === undefined) {
      arr[A[i]] = true;
      sum -= A[i];
    }
    if (sum === 0) {
      return i;
    }
  }
  return -1;
}
