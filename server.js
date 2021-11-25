var http = require('http')
var fs = require('fs')

fs.readFile('image.png', function(err, data) {
  if (err) throw err // Fail if the file can't be read.
  http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'image/jpeg'})
    res.end(data) // Send the file data to the browser.
  }).listen(8124)
  console.log('Server running at http://localhost:8124/')
})



async function quickstart() {
  // Imports the Google Cloud client library
  const vision = require('@google-cloud/vision');

  // Creates a client
  const client = new vision.ImageAnnotatorClient();

  // Performs label detection on the image file
  const [result] = await client.labelDetection('6177ca2e747b2816f6ae3ada.png');
  const labels = result.labelAnnotations;
  console.log('Labels:');
  labels.forEach(label => console.log(label.description));
}

quickstart();