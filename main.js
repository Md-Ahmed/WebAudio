var audioContext = new (window.AudioContext || window.webkitAudioContext)();
var oscillator = audioContext.createOscillator();
oscillator.type = 'sine';
oscillator.frequencyValue = 3500;
oscillator.start();
oscillator.connect(audioContext.destination);