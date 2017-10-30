# URL: https://codility.com/programmers/lessons/3-time_complexity/perm_missing_elem/

function solution(A) {
  A.sort(function(a, b) {
    return a - b;
  });
  if (A[0] !== 1) return 1;
  if (A[A.length - 1] !== A.length + 1) return A.length + 1;
  for (i = 0; i < A.length - 1; i++) {
    if (A[i + 1] - A[i] !== 1) {
      return A[i] + 1;
    }
  }
}
