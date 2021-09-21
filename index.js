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

var username=""
var contact=""
var item=""
var notify="Please Submit details to get notification on your mobile number"
document.getElementById("notify").innerText=notify

var submit = document.getElementById("submit").addEventListener("click",function(event){
    username=document.getElementById("user_name").innerText
    contact=document.getElementById("phone_number").textContent
    item=document.getElementById("item").textContent
    window.console.log(username)
    console.log(contact)
    console.log(item)
})
