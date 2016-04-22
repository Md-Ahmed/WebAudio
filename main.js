var canvas = document.getElementById('canvas');
console.log(canvas);
var context = canvas.getContext("2d");
console.log(context);
context.fillStyle = "green";
console.log(context.fillStyle);
context.fillRect(10, 10, 100, 100);
var audioContext = new (window.AudioContext || window.webkitAudioContext)();
var oscillator;
isPlaying = false;
function play(){
    oscillator = audioContext.createOscillator();
    oscillator.type = 'sine';
    oscillator.connect(audioContext.destination);
    oscillator.start();
}
function stop() {
    oscillator.disconnect();
}

function updateFrequency(element) {
    oscillator.frequency.value = element.value;
    console.log(element.value);
}

function togglePlay() {
    if(isPlaying){
        stop();
        isPlaying = false;
    }
    else{
        play();
        isPlaying = true;
    }
}