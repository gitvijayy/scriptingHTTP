var https = require('https');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};


function getHTML (options, callback) {

  /* Add your code here */
  let chunkData = "";

 

  /* Add your code here */
  https.get(options, function (response) {

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
        callback(chunkData);
      });
  });


}

function printHTML (html) {
  console.log(html);
}

getHTML(requestOptions, printHTML);