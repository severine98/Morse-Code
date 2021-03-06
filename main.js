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

const alphabet = {
    "-----": "0",
    ".----": "1",
    "..---": "2",
    "...--": "3",
    "....-": "4",
    ".....": "5",
    "-....": "6",
    "--...": "7",
    "---..": "8",
    "----.": "9",
    ".-": "a",
    "-...": "b",
    "-.-.": "c",
    "-..": "d",
    ".": "e",
    "..-.": "f",
    "--.": "g",
    "....": "h",
    "..": "i",
    ".---": "j",
    "-.-": "k",
    ".-..": "l",
    "--": "m",
    "-.": "n",
    "---": "o",
    ".--.": "p",
    "--.-": "q",
    ".-.": "r",
    "...": "s",
    "-": "t",
    "..-": "u",
    "...-": "v",
    ".--": "w",
    "-..-": "x",
    "-.--": "y",
    "--..": "z",
    "/": " ",
    "-·-·--": "!",
    "·-·-·-": ".",
    "--··--": ","
}

arrow.addEventListener('click', () => {
    label1.classList.toggle("arrowToggle");
    arrow.classList.toggle("red");
}
)



submit.addEventListener('click', () => {
    if (label1.classList.contains("arrowToggle")) {
        morseToText()
    } else {
        textToMorse();
    }
})


const textToMorse = () => {
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
}



const morseToText = () => {
    const alphabetArray = [];
    const inputArray = input.value.split(' ');
    console.log(inputArray);
    inputArray.forEach(element => {
        if (alphabet.hasOwnProperty(element)) {
            let translation = alphabet[element];
            alphabetArray.push(translation);
        };
        const translatedCode = alphabetArray.join("");
        console.log(translatedCode);
        output.value = translatedCode;

    });
}