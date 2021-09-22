// new speech recognition object
var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var recognition = new SpeechRecognition();


var content = ""         
// This runs when the speech recognition service returns result
recognition.onresult = function(event) {
    var transcript 
    var current = event.resultIndex;

    transcript = event.results[current][0].transcript;
    if(transcript.includes(item.charAt(0).toUpperCase()+item.slice(1)
    ||
    item.charAt(0).toLowerCase()+item.slice(1)))
    {console.log("item found")}
    content+=transcript;
    console.log(content)
};


recognition.continuous = true;

var username=""
var contact=""
var item=""
document.getElementById("notify").innerText="Please Submit details to get notification on your mobile number"

var submitted=false;
var submit = document.getElementById("submit").addEventListener("click",function(event){
    username=document.getElementById("user_name").value.trim()
    contact=document.getElementById("phone_number").value.trim()
    item=document.getElementById("item").value.trim()
    if(!validate(username,contact,item)){return}
    if(!phonenumber(contact))
    {return}
    if(item.includes(" "))
    {alert("Enter item one a time");return}
    window.console.log(username)
    console.log(contact)
    console.log(item)
    document.getElementById("notify").innerHTML="Hi "+ username +"! You'll get a text message on "+ contact +
                                                " whenever '" + item +"' will be called in the meeting "
    submitted=true;
})

var listening_desired=true

var listen_button=document.getElementById('listen')
listen_button.addEventListener('click',function(event){
    if(submitted==false){
        alert("Please submit required details first")
        return 
    }
    if(listen_button.innerText=="Start listening"){
    listen_button.innerText="Stop listening"
    recognition.start();
    listening_desired=true;
    }
    else{
    listen_button.innerText="Start listening"
    listening_desired=false;
    recognition.stop()
    }
})

recognition.onend = function() {
    console.log('Speech recognition service disconnected');
    if(listening_desired==true)
    recognition.start();
}

function phonenumber(inputtxt)
{
if (/^\d{10}$/.test(inputtxt)) {
    // value is ok, use it
    return true
} else {
    alert("Please enter valid cell number")
    return false
}
}

function validate(username, contact, item){
    if(!username)
    {
    alert("username is required")
    return false
    }
    if(!contact)
    {
    alert("cell number is required")
    return false
    }
    if(!item)
    {
    alert("target name is required")
    return false
    }
    return true
}
