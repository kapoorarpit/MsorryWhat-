var unirest = require("unirest");

var req = unirest("POST", "https://www.fast2sms.com/dev/bulkV2");

req.headers({
  "authorization": "TQWqnPhAcjvrEiBY7umMtIeXwS1axZ4ysoKb89dkp30gCU5l2REFBzyLO82IYxUGoR5TtJNs0MpgmhKq"
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