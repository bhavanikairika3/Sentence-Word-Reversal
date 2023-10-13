function reverseWords(sentence) {
  const words = sentence.split(' ');
  const reversedWords = words.map(word => {
    const reversed = word.split('').reverse().join('');
    return reversed;
  });
  const reversedSentence = reversedWords.join(' ');
  return reversedSentence;
}
const inputSentence = "Programming is Fun";
const reversedSentence = reverseWords(inputSentence);
console.log(reversedSentence);
