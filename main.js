var x = 0;
var y = 0.00;

var canvas = document.getElementById('canvas');
var context = canvas.getContext("2d");
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
/*function render(){
    context.fillStyle = "green";
    context.clearRect(0, 0, canvas.width, canvas.height);
    for(var i = 0; i < canvas.width; i++){
        context.fillRect(x, Math.sin((180/Math.PI)*y)*20 + (canvas.height/2), 2, 2);
        x++;
        y += .002;
    }
    x++;
    requestAnimationFrame(render);
}*/

function render(){
    context.fillStyle = "green";
    context.clearRect(0, 0, canvas.width, canvas.height);
    for(var i = 0; i < canvas.width; i++){
        context.fillRect(x, Math.sin((180/Math.PI)*y)*20 + (canvas.height/2), 2, 2);
        x += 1;
        y += .002;
    }
    if (x > canvas.width){
        x = 0;
    }
    requestAnimationFrame(render);
}