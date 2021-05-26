// add whatever parameters you deem necessary
function separatePositive(arr) {
    //set a left and right pointer
    //inch our way in until we reach a negative on the left and a positive on the right & swap
    //continue until left meets right
    let leftIdx = 0;
    let rightIdx = arr.length-1;

    while (leftIdx < rightIdx){
        if((arr[leftIdx] < 0) && arr[rightIdx] > 0){
            let swap = arr[rightIdx];
            arr[rightIdx] = arr[leftIdx];
            arr[leftIdx] = swap;
            leftIdx++;
            rightIdx--;
        }
        else if(arr[leftIdx] < 0) rightIdx--;
        else leftIdx++;
    }
    return arr;
}

separatePositive([2, -1, -3, 6, -8, 10]) // [2, 10, 6, -3, -1, -8]
separatePositive([5, 10, -15, 20, 25]) // [5, 10, 25, 20, -15]
separatePositive([-5, 5]) // [5, -5]
separatePositive([1, 2, 3]) // [1, 2, 3]

module.exports = separatePositive;
