// add whatever parameters you deem necessary
function sameFrequency(num1, num2) {
    let num1FreqCounter = createFreqCounter(num1);
    let num2FreqCounter = createFreqCounter(num2);

    for (let key in num1FreqCounter){
        if (num1FreqCounter[key] !== num2FreqCounter[key]) return false;
    }
    return true;
}

function createFreqCounter(num){
    let obj = {};
    let digitArray = num.toString().split("");
    for (let digit of digitArray){
        obj[digit] = obj[digit] + 1 || 1;
    }
    return obj;
}

module.exports = sameFrequency;
