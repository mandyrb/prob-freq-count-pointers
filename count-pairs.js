// add whatever parameters you deem necessary
function countPairs(arr, target) {
    //first sort the array (O(n logn))
    arr.sort((a,b) => a-b)
    //then use multiple pointers, moving in from left & right to seek sums O(logn)
    let leftIdx = 0;
    let rightIdx = arr.length - 1;
    let pairCount = 0;

    while (leftIdx < rightIdx){
        let sum = arr[leftIdx] + arr[rightIdx];
        if (sum === target){
            pairCount++;
            leftIdx++;
            rightIdx--;
        }
        else if(sum < target) leftIdx++;
        else rightIdx--;
    }
    return pairCount;
}


countPairs([3,1,5,4,2], 6) // 2 (1,5 and 2,4)
countPairs([10,4,8,2,6,0], 10) // 3 (2,8, 4,6, 10,0)
countPairs([4,6,2,7], 10) // 1 (4,6)
countPairs([1,2,3,4,5], 10) // 0
countPairs([1,2,3,4,5], -3) // 0
countPairs([0,-4],-4) // 1
countPairs([1,2,3,0,-1,-2],0) // 2

module.exports = countPairs;
