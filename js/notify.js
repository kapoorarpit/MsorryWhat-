var unirest = require("unirest");

var req = unirest("POST", "https://www.fast2sms.com/dev/bulkV2");

require('dotenv').config()

req.headers({
  "authorization": process.env.API_KEY
});

req.form({
  "message": "This is a test message",
  "language": "english",
  "route": "q",
  "numbers": "8445007708",
});

req.end(function (res) {
  if (res.error) throw new Error(res.error);

  console.log(res.body);
});