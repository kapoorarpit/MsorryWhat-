var unirest = (require("unirest"));

var req = unirest("POST", "https://myproxxyserver.herokuapp.com/https://www.fast2sms.com/dev/bulkV2")

//require('dotenv').config()
//browserify index.js -o bundle.js

req.headers({
  "Authorization": "odfvB2zmEh3Q1SjCk6eGsiD4bAalRPgZIpK9rXyuUxNVW50T8FqSsA4YFGyLld9b3JmWN0U17Vxwhf2K",
  
});


req.form({
  "message": "Hi  ",
  "language": "english",
  "route": "q",
  "numbers": "8445007708",
});

req.end(function (res) {
  if (res.error) throw new Error(res.error);
console.log(res.body)})