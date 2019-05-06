var https = require('https');

function getAndPrintHTML() {

  let chunkData = "";

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  https.get(requestOptions, function (response) {

    response.setEncoding('utf8');

    response.on('data', function (data) {
      chunkData += data;
    });

    response.on('end', function () {
      console.log('Complete Data: ', chunkData);
    });
  });

}

getAndPrintHTML();