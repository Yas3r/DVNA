// TODO: Tidy up this code by making use of the template and have some code flow reach this function and auto restart if a service failure is detected

var express = require('express');
var DVNA = express();

function explodeNodeJS(p) {
  for (i = 1; i <= p; ++i) {
    var f = f * i;
    console.log(f * f * f * f * f);
    console.log('[!] explodeNodeJS invoked');
    console.log('Excuse me sir, is your CPU spiking?');
  }
}

DVNA.get('/', function(req, res) {
  explodeNodeJS(600000);
  explodeNodeJS(700000);
  explodeNodeJS(800000);
  explodeNodeJS(900000);

  res.send('42');
});

module.exports = {
  path: 'denial_of_service',
  server: DVNA
}
