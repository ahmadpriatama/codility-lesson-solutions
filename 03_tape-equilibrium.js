# URL: https://codility.com/programmers/lessons/3-time_complexity/tape_equilibrium/

function solution(A) {
  var sum = A.reduce(function(a, b) {
    return a + b;
  });
  var X = A.reduce(function(a, b) {
    return Math.abs(a) + Math.abs(b);
  });
  var acc = 0;
  for (var i = 0, len = A.length - 1; i < len; i++) {
    acc += A[i];
    var bcc = sum - acc;
    var diff = Math.abs(acc - bcc);
    if (diff < X) {
      X = diff;
    }
  }
  return X;
}
