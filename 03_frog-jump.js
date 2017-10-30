# URL: https: //codility.com/programmers/lessons/3-time_complexity/frog_jmp/

function solution(X, Y, D) {
  var diff = Y - X;
  if (diff === 0) {
    return 0;
  }

  return Math.ceil(diff / D);
}
