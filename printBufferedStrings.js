var https = require('https');

function getAndPrintHTML () {

  let chunkData = [];

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  /* Add your code here */
  https.get(requestOptions, function (response) {

    // set encoding of received data to UTF-8
    response.setEncoding('utf8');

    // the callback is invoked when a `data` chunk is received
    response.on('data', function (data) {
      chunkData += data;
      //chunkData.push(data);
      //console.log('Chunk Received: ', data, '\n');

      //console.log();
    });

    response.on('end', function () {
        console.log('Complete Data: ', chunkData);
      });
  });


}

getAndPrintHTML();