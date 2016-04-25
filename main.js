var angle = 0;

var canvas = document.getElementById('canvas');
var context = canvas.getContext("2d");
width = canvas.width;
height = canvas.height;
context.fillStyle = "green";
render();

var audioContext = new (window.AudioContext || window.webkitAudioContext)();
var oscillator;
isPlaying = false;
function play(){
    oscillator = audioContext.createOscillator();
    oscillator.type = 'sine';
    oscillator.frequency.value = document.getElementById('frequency').value;
    oscillator.connect(audioContext.destination);
    oscillator.start();
}
function stop() {
    oscillator.disconnect();
}

function updateFrequency(element) {
    oscillator.frequency.value = element.value;
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

function render(){
    context.clearRect(0, 0, width, height);
    for(var i = 0; i < width; i++){
        context.fillRect(i*5, Math.sin(i)*5 + height/2, 2, 2);
    }
    requestAnimationFrame(render);
}