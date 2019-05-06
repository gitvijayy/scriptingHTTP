module.exports = function getHTML(options, callback) {
  var https = require('https');
  let chunkData = "";
  https.get(options, function (response) {
    response.setEncoding('utf8');
    response.on('data', function (data) {
      chunkData += data;
    });
    response.on('end', function () {
      callback(chunkData);
    });
  });
}