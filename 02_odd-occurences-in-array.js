# URL: https://codility.com/programmers/lessons/2-arrays/odd_occurrences_in_array/

function solution(A) {
  var a = [];
  var b = [];
  var x = null;

  A.forEach(function(item) {
    if (a[item] === undefined) {
      a[item] = b.length;
      b[b.length] = {
        count: 1,
        x: item,
      };
    } else {
      b[a[item]].count += 1;
    }
  });

  for (i = 0; i < b.length; i++) {
    if (b[i].count % 2 !== 0) {
      x = b[i].x;
      break;
    }
  };
  return x;
}
