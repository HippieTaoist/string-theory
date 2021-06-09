// ### Guidelines

// * Other than `.toUpperCase` and `.toLowerCase`, don't use any string methods. Sure, `.slice` would be nice here, or `.repeat`. But you'll learn just a ton more if you use actual loops!

const str = 'Loving Me Some Javascript!! what is wrong with you? I know you love it too.';
let outStr = '';
let charCount = 0
console.log(str)

console.log('------------------------------------------');
console.log('------------------------------------------');
console.log('------------------XIFY--------------------');
////////////////// XIFY////////////////////////////
function xify(str) {
    // * `xify` - returns the same string, but with every character replaced by an 'x'
    //   * Examples:
    //     * xify('hello') -> 'xxxxx'
    //     * xify('hi there') -> 'xxxxxxxx'
    for (let char of str) {
        char = 'x';

        outStr += char;
    }
    return outStr

}
console.log(xify(str));
//CODE WORKS ABOVE THIS LINE

console.log('--------------------------------------------------');
console.log('--------------------------------------------------');
console.log('------------------YELLINGCHARS--------------------');
//////////////////////YELLINGCHARS///////////////////
outStr = '';

function yellingChars(str) {
    // * `yellingChars` - returns the given string with an exclamation point after each character
    //   * Examples:
    //     * yellingChars('goodness') -> 'g!o!o!d!n!e!s!s!'
    //     * yellingChars('oh hello') -> 'o!h! !h!e!l!l!o!'
    //   * Hints:
    //     * We can add more than one thing to the string each time through the loop. In this case, it's the current character AND an exlamation point.
    for (let char of str) {
        char += '!';

        outStr += char;
    }
    return outStr
}
console.log(yellingChars(str))
    //CODE WORKS ABOVE THIS LINE

outStr = ''
charCount = 0;
console.log('------------------------------------------------');
console.log('------------------------------------------------');
console.log('------------------INDEXCHARS--------------------');
////////////////////INDEXCHARS/////////////////
function indexedChars(str) {
    // * `indexedChars` - adds the index of each character before that character in the given string
    //   * Examples:
    //     * indexedChars('hello') -> '0h1e2l3l4o'
    //     * indexedChars('bye') -> '0b1y2e'
    //   * Hints: 
    //     * We can add something BEFORE the current character as well!
    for (let char of str) {
        char += charCount;
        outStr += char;
        charCount++;
    }
    return outStr;
}
console.log(indexedChars(str));
//Code Works Above This Line

outStr = '';
charCount = 0;
console.log('---------------------------------------------------');
console.log('---------------------------------------------------');
console.log('------------------NUMBEREDCHARS--------------------');
/////////////////////////NUMBEREDCHARS//////////////////
function numberedChars(str) {
    // * `numberedChars` - adds the number of each character before that character in the given string
    //   * Examples:
    //     * numberedChars('hello') -> '(1)h(2)e(3)l(4)l(5)o'
    //     * numberedChars('bye') -> '(1)b(2)y(3)e'
    //   * Hints: 
    //     * there's a simple relationship between the index and the number... indices are 0-based counting and numbers are 1-based... you'll figure it out!
    for (let char of str) {
        charCount++;
        let charCountBuildUp = '(' + charCount + ')';
        char = charCountBuildUp + char;
        outStr += char;

    }
    return outStr;
}
console.log(numberedChars(str))
    //Code Works Above This Line

outStr = '';
charCount = 0;
console.log('---------------------------------------------');
console.log('---------------------------------------------');
console.log('------------------EXCLAIM--------------------');
//////////////////////EXCLAIM/////////////////////////////
function exclaim(str) {
    // * `exclaim` - returns the given sentence with every question mark or period changed to an exclamation point
    //   * Examples:
    //     * exclaim('What are you doing? Are you a fool?') -> 'What are you doing! Are you a fool!'
    //     * exclaim('This is fine.') -> 'This is fine!'
    for (let char of str) {
        if (char === '?') { char = '!' };
        if (char === '.') { char = '!' };
        outStr += char;
    }
    return outStr
}
console.log(exclaim(str));

outStr = '';
console.log('----------------------------------------------');
console.log('----------------------------------------------');
console.log('------------------REPEATIT--------------------');
////////////////////REPEATIT////////////////////////
function repeatIt(str, reps) {
    // * `repeatIt` - returns the given string repeated `n` times, where `n` is the second parameter
    //   * Examples:
    //     * repeatIt('beetlejuice', 3) -> 'beetlejuicebeetlejuicebeetlejuice'
    //     * repeatIt('oh hi!', 8) -> 'oh hi!oh hi!oh hi!oh hi!oh hi!oh hi!oh hi!oh hi!'
    reps = 5;
    while (reps >= 0) {
        outStr += str;
        reps--;
    }
    return outStr
}
console.log(repeatIt(str))
    ///Code Works Above This Line

console.log('----------------------------------------------');
console.log('----------------------------------------------');
console.log('------------------TRUNCATE--------------------');
outStr = ''
charCount = 0;

function truncate(str, strLength) {
    // * `truncate` - shortens a long string to 15 characters plus an ellipsis (...)
    //   * Examples:
    //     * truncate('The fault, dear Brutus, is not in our stars, but in ourselves.') -> 'The fault, dear...'
    //     * truncate("Well, that's just, like, your opinion man.") -> "Well, that's ju..."
    console.log(str, strLength, outStr)
    console.log('');
    console.log('');
    char = '';
    while (strLength !== 0) {
        for (let char of str[charCount]) {
            outStr += char;

        }
        charCount++;
        strLength--;
    }
    outStr += '...';
    ``
    return outStr;
}
console.log(truncate(str, 15));

console.log('----------------------------------------------');
console.log('----------------------------------------------');
console.log('------------------ciEmailify--------------------');

outStr = '';

function ciEmailify(fullName) {
    // * `ciEmailify` - creates an email from a two-part name
    //   * Examples:
    //     * ciEmailify('colin jaffe') -> 'colin.jaffe@codeimmersives.com'
    //     * ciEmailify('Anthony DeRosa') -> 'anthony.derosa@codeimmersives.com'
    for (let char of fullName) {
        if (char === ' ') { char = '.' };
        outStr += char;
    }

    let email = outStr + "@codeimmersives.com";
    return email.toLowerCase();
}
console.log(ciEmailify('Shawn Kittel'));




// * `reverse` - reverses the given string
//   * Examples:
//     * reverse('colin') -> 'niloc'
//     * reverse('mesuara') -> 'arausem'




// * `onlyVowels` - returns only the vowels from a word
//   * Examples:
//     * onlyVowels('Colin Jaffe') -> 'oiae'
//     * onlyVowels('quickly') -> 'ui'
//     * onlyVowels('Anthony DeRosa') -> 'Aoeoa'



// * `crazyCase` - returns the given string with alternating lower and upper cases
//   * Examples:
//     * crazyCase('hello') -> 'hElLo'
//     * crazyCase('multiple words here') -> 'mUlTiPlE WoRdS HeRe'
//     * crazyCase('YELLING') -> 'yElLiNg'


// * `titleCase` - returns a transformed version of the given string where every word starts with a capital letter and every non-word-starting letter is lowercased
//   * Examples:
//     * titleCase('return of the king') -> 'Return Of The King'
//     * titleCase('cOde iMMerSives') -> 'Code Immersives'



// * `camelCase` - returns the given string in camel case
//   * Examples:
//     * camelCase('oh Hello') -> 'ohHello'
//     * camelCase('well yeah of course') -> 'wellYeahOfCourse'
//     * camelCase('Boy howdy') -> 'boyHowdy'



// * `crazyCase2ReturnOfCrazyCase` - same as `crazyCase`, but does NOT count spaces as letters to upper or lower case (see examples below!)
//   * Examples:
//     * crazyCase2ReturnOfCrazyCase('multiple words here') -> 'mUlTiPlE wOrDs HeRe'
//     * crazyCase2ReturnOfCrazyCase('crazy stuff') -> 'cRaZy StUfF'