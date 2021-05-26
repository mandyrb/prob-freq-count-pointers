// add whatever parameters you deem necessary
function constructNote(str1, str2) {
    if (str2.length === 0) return false;
    const str1FreqCounter = createFreqCounter(str1);
    const str2FreqCounter = createFreqCounter(str2);
    for (let char of str1){
        if (str2FreqCounter[char] < str1FreqCounter[char]){
            return false;
        }
    }
    return true;
}

function createFreqCounter(str){
    let obj = {};
    for (let char of str){
        obj[char] = obj[char] + 1 || 1;
    }
    return obj;
}

module.exports = constructNote;


