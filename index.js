// new speech recognition object
var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var recognition = new SpeechRecognition();


var content = ""         
// This runs when the speech recognition service returns result
recognition.onresult = function(event) {
    var transcript 
    var current = event.resultIndex;

    transcript = event.results[current][0].transcript;

    content+=transcript;
    document.getElementById("instructions").textContent=content
    console.log(content)
};


recognition.onend = function() {
    console.log('Speech recognition service disconnected');
    recognition.start();
}

recognition.continuous = true;
recognition.start();