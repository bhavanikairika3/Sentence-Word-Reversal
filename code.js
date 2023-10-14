function reverseWords(sentence)
{
    return sentence.split(' ').map(word => word.split('').reverse().join('')).join(' ');
}

const inputSentence = "Programming is Fun";
const reversedSentence = reverseWords(inputSentence);
console.log(reversedSentence);
