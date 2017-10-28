# URL: https://codility.com/programmers/lessons/1-iterations/binary_gap/

function solution(N) {
  var x = 1;
  var n = 0;
  var max = 0;
  var one = false;
  do {
    if ((N & x) === 0) {
      n += 1;
      if (one && n > max) {
        max = n;
      }
    } else {
      n = 0;
      one = true;
    }
    x *= 2;
  } while (x < N);
  return max;
}
