var moment = require('moment');

console.log(moment().format());

// January 1st 1970 @ 12:00 am -> 0
// January 1st 1970 @ 12:01 am -> 60

var now = moment();
console.log('Current timestamp', now.unix());

var timestamp = 1463586585;
var currentMoment = moment.unix(timestamp);
console.log('current moment ', currentMoment.format('MMM Do, YYYY @ h:mm a'));
