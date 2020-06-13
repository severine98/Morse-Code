let input = document.getElementById('input');
let output = document.getElementById('output');
let submit = document.getElementById('submit');
let arrow = document.querySelector("i");
let label1 = document.getElementById("label-1");
let label2 = document.getElementById("label-2");


const morseCode = {
    'a': '.-',
    'b': '-...',
    'c': '-.-.',
    'd': '-..',
    'e': '.',
    'f': '..-.',
    'g': '--.',
    'h': '....',
    'i': '..',
    'j': '.---',
    'k': '-.-',
    'l': '.-..',
    'm': '--',
    'n': '-.',
    'o': '---',
    'p': '.--.',
    'q': '--.-',
    'r': '.-.',
    's': '...',
    't': '-',
    'u': '..-',
    'v': '...-',
    'w': '.--',
    'x': '-..-',
    'y': '-.--',
    'z': '--..',
    '1': '.----',
    '2': '..---',
    '3': '...--',
    '4': '....-',
    '5': '.....',
    '6': '-....',
    '7': '--...',
    '8': '---..',
    '9': '----.',
    '0': '-----',
    '.': '.-.-.-',
    ',': '--..--',
    '?': '..--..',
    "'": '.----.',
    '!': '-.-.--',
    '/': '-..-.',
    '(': '-.--.',
    ')': '-.--.-',
    '&': '.-...',
    ':': '---...',
    ';': '-.-.-.',
    '=': '-...-',
    '+': '.-.-.',
    '-': '-....-',
    '_': '..--.-',
    '"': '.-..-.',
    '$': '...-..-',
    '@': '.--.-.',
    ' ': '/'
}


arrow.addEventListener('click', () => { //changed arrow to submit until I get the second event working
    const morseCodeArray = [];
    const inputArray = input.value.split('');
    console.log(inputArray);
    inputArray.forEach(element => {
        if (morseCode.hasOwnProperty(element)) {
            let translation = morseCode[element];
            morseCodeArray.push(translation);
        };
        const translatedCode = morseCodeArray.join(" ");
        output.value = translatedCode;
    });
})


submit.addEventListener('click', () => {
    const textArray = [];
    const inputArray = input.value.split('');
    console.log(inputArray);
    inputArray.forEach(element => {
        if (morseCode.value(element)) {
            let translation = morseCode[element];
            textArray.push(translation);
        };
        const translatedCode = morseCodeArray.join(" ");
        output.value = translatedCode;
    })
})