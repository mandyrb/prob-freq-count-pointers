// add whatever parameters you deem necessary
function averagePair(arr, target) {
    //set right and left pointers for starters
    let leftIdx = 0;
    let rightIdx = arr.length-1;

    //inch our way in seeking if average = target
    //if too big decrease right pointer, otherwise increase left

    while (leftIdx < rightIdx){
        let average = (arr[leftIdx] + arr[rightIdx])/2;
        if (average === target) return true;
        else if (average > target) rightIdx--;
        else leftIdx++;
    }
    //return false if right combo not found
    return false;
}

module.exports = averagePair;
