Firstly, Lets Understand the question in detail : 
Imagine you have a sentence made up of words, like this: "This is a sunny day."
Now, the task is to reverse each word in the sentence. So, instead of reading each word from left to right, you read them from right to left, but the order of the words in the sentence stays the same.
In the example you provided, "This is a sunny day" becomes "shiT si a ynnus yad" after reversing each word.

Now, Let's Understand the coding part :

function reverseWords(sentence) --> This line defines a function called "reverseWords" that takes a sentence as input.

const words = sentence.split(' '); --> Imagine the sentence as a string of words. This line splits the sentence into individual words wherever there's a space, and puts these words into a box called words. So, "This is a sunny day" becomes ["This", "is", "a", "sunny", "day"].

const reversedWords = words.map(word => { ... }); --> Now, we take each word from the box (like "This", "is", etc.) and For each word, we reverse its letters. For example, "This" becomes "sihT", "is" remains "si", and so on.
After reversing the letters, we put these new words into another box called reversedWords.

const reversedSentence = reversedWords.join(' '); -->  Next, we take the reversed words from the box and join them back together into a sentence, with spaces in between each word. This forms a new sentence.
For example, ["sihT", "si", "a", "ynnus", "yad"] becomes "sihT si a ynnus yad".

return reversedSentence; --> This line means the function is giving back (returning) the newly created reversed sentence as an output.

const inputSentence = "This is a sunny day"; --> Here, we have a specific input sentence: "This is a sunny day".

const reversedSentence = reverseWords(inputSentence); --> We use our special reverseWords function with the input sentence. The function processes the sentence according to the instructions we set earlier.

console.log(reversedSentence); --> Finally, the reversed sentence, which is "sihT si a ynnus yad", is shown on the screen for you to see.
