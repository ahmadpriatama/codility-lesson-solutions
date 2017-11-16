# URL: https://codility.com/programmers/lessons/4-counting_elements/perm_check/

function solution(A) {
  A.sort(function(a, b) {
    return a - b;
  });
  if (A[0] !== 1) {
    return 0;
  }
  for (var i = 0, len = A.length; i < len - 1; i++) {
    if (A[i + 1] - A[i] !== 1) {
      return 0;
    }
  }
  return 1;
}
