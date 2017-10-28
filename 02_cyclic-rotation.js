# URL: https://codility.com/programmers/lessons/2-arrays/

function solution(A, K) {
  var x = K % A.length;
  var ret = [];
  for (i = 0; i < A.length; i++) {
    ret[i] = A[(A.length + i - x) % A.length];
  }
  return ret;
}
