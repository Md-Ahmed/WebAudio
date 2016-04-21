var audioContext = new (window.AudioContext || window.webkitAudioContext)();
var oscillator;
isPlaying = false;
function play(){
    oscillator = audioContext.createOscillator();
    oscillator.type = 'sine';
    oscillator.frequencyValue = 3500;
    oscillator.connect(audioContext.destination);
    oscillator.start();
}
function stop() {
    oscillator.disconnect();
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