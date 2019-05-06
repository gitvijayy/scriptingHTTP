var https = require('https');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};


function getHTML(options, callback) {

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

function printHTML(html) {
  console.log(html);
}

getHTML(requestOptions, printHTML);