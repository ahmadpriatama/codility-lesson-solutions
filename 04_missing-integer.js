# URL: https://codility.com/programmers/lessons/4-counting_elements/missing_integer/

function solution(A) {
    var min = 1;
    var B = A.filter(function(i) {
        return i > 0;
    });
    B.sort(function(a,b) { 
        return a - b;
    });
    for (var i = 0; i < B.length; i++) {
        if (B[i] > min) {
            break;
        } else if (B[i] === min) {
            min++;
        }
    }
    return min;
}
