// add whatever parameters you deem necessary
function isSubsequence(str1, str2) {
    let str1Idx = 0;
    let str2Idx = 0;
    while ((str1Idx < str1.length)){
        if (str2Idx >= str2.length) return false;
        else if (str2[str2Idx] !== str1[str1Idx]) str2Idx++;
        else {
            str1Idx++;
            str2Idx++;
        }
    }
    return true;
}

isSubsequence('hello', 'hello world'); // true
isSubsequence('sing', 'sting'); // true 
isSubsequence('abc', 'abracadabra'); // true
isSubsequence('abc', 'acb'); // false (order matters)

module.exports = isSubsequence;
