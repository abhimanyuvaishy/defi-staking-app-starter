

export const isPermutation = (str1, str2)=>{
    if(str1.length !== str2.length){
        return false;
    }
const sortedStringOne = str1.split('').sort().join('');
const sortedStringTwo = str2.split('').sort().join('');
return sortedStringOne === sortedStringTwo;
}

export const isUniqueChar = (str)=>{
    const char = new Set(str);
    return str.length === char.size;
}

/**
 * 
 * String Compression: Implement a method to perform basic string compression using the counts
    of repeated characters. For example, the string aabcccccaaa would become a2blc5a3, If the
    "compressed" string would not become smaller than the original string, your method should return
    the original string. You can assume the string has only uppercase and lowercase letters (a - z). 

 * @param {*} str 
 * @returns string
 */
export const stringCompression = (str)=>{
    const uniqueString = new Set(str);
    if(!str.length || str.length === uniqueString.size){
        return str;
    }
    let count = 1;
    let newString = "";
    for(let i=0; i<str.length; i++){
        if(str[i]===str[i+1]){
            count += 1;
            continue;
        }
        newString = newString + str[i] + count;
        count = 1;
    }
    return newString.length >= str.length ? str : newString;
}