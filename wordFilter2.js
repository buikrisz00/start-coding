let firstSentence = "Holy moly, this is frickin good!";
let secondSentence = "This is frickin, fucking great!";
let thirdSentence = "Fuck fuck fuck fuck fuck fuck!";
let fourthSentence = "Flick flock fluck fuck brick!";
let fifthSentence = "No curse words here you little shit!";

let curseWords = ["fuck", "fucking", "frickin", "shit"];

function cleanse(sentence, words) {
    let result = "";
    let wordsOfSentence = sentence.split(" ");
    for (const word of wordsOfSentence) {
        let isCleanWord = true;
        for (const curseWord of words) {
            if (curseWord.toUpperCase() === word.toUpperCase() || word.indexOf(curseWord) > -1) {
                isCleanWord = false;
            }
        }
        if (isCleanWord) {
            result = result + word + " ";
        } else {
            result = result + "**** ";
        }
    }
    return result;
}

console.log(cleanse(firstSentence, curseWords));
console.log(cleanse(secondSentence, curseWords));
console.log(cleanse(thirdSentence, curseWords));
console.log(cleanse(fourthSentence, curseWords));
console.log(cleanse(fifthSentence, curseWords));
