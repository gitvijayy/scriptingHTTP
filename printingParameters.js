var https = require('https');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

function getAndPrintHTML(options) {

  let chunkData = "";

  https.get(options, function (response) {

    response.setEncoding('utf8');

    response.on('data', function (data) {
      chunkData += data;
    });

    response.on('end', function () {
      console.log('Complete Data: ', chunkData);
    });
  });

}

getAndPrintHTML(requestOptions);