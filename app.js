let input = document.getElementById('input');
let output = document.getElementById('output');
let submit = document.getElementById('submit');

let morseArray = ['.-', '-...', '-.-.', '-..', '.', '..-.', '--.', '....',
    '..', '.---', '-.-', '.-..', '--', '-.', '---', '.--.',
    '--.-', '.-.', '...', '-', '..-', '...-', '.--', '-..-',
    '-.--', '--..', '/'];

    

submit.addEventListener('click', () => {;
    console.log(input.value);
    alphabetPosition();
}
)


const alphabetPosition = () => {
    console.log(input.value);
    let userText = input.value;
    var result = [];
    for (let i = 0; i < userText.length; i++) {
        let code = userText.toUpperCase().charCodeAt(i);
        if (code > 64 && code < 91) {
            result.push(code - 64);
        }
        console.log(code);
        if(code === 32) {
            result.push(26);
        }
    }

    let newArray = result;

    newMorseArray = [];

    newArray.forEach(element => {
        parseInt(element);

        newMorseArray.push(morseArray[element]);

        let morseTranslation = newMorseArray.join(" ");
        output.value = morseTranslation;
    })
}




// would be cool to have a version where each time you time, it adds the morse code letter dynamically to the page,
// when you do a backspace, it would delete the morse code letter too