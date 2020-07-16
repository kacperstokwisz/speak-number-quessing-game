const msgEl = document.getElementById('msg');

const randomNub = getRandomNumber();

console.log('Number:', randomNub);

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecoginition

let recognition = new window.SpeechRecognition();

// Start recognition and game
recognition.start();

// Capture user speak
function onSpeak(e) {
    const msg = e.results[0][0].transcript;
    writeMessage(msg);
    checkNumber(msg);
}

// Generate random number
function getRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}


// Speak result
recognition.addEventListener('result', onSpeak)