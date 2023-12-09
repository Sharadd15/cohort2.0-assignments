/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    if(numbers.length == 0)
        return;
    var ans = numbers[0];
    for(i = 1; i < numbers.length; ++i)
    {
        if(numbers[i] > ans)
            ans = numbers[i];
    }
    return ans;
}

console.log(findLargestElement([-3, -7, -2, -9, -1]));
module.exports = findLargestElement;