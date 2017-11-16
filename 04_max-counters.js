# URL: https://codility.com/programmers/lessons/4-counting_elements/max_counters/

function solution(N, A) {
  var arr = [];
  var max = 0;
  var shadow = 0;
  A.forEach(function(X) {
    if (X > N) {
      max = shadow;
    } else {
      var index = X - 1;
      if (arr[index] === undefined || arr[index] < max) {
        arr[index] = max;
      }
      arr[index]++;
      if (arr[index] > shadow) {
        shadow = arr[index]
      }
    }
  });
  for (var i = 0; i < N; i++) {
    if (arr[i] === undefined || arr[i] < max) {
      arr[i] = max;
    }
  }
  return arr;
}
