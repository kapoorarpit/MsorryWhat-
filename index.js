// new speech recognition object
var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var recognition = new SpeechRecognition();
            
// This runs when the speech recognition service starts


var content = ""         
// This runs when the speech recognition service returns result
recognition.onresult = function(event) {
    var transcript 
    var current = event.resultIndex;

    transcript = event.results[current][0].transcript;

    content +=transcript;
    console.log(content)
};
              
// start recognition

recognition.continuous = true;
recognition.interimResults = true;
recognition.start();