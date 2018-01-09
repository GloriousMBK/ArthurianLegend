const express = require('express');
const app = express();
const PORT = 3000;
const bodyParser = require('body-parser');

// app.use(express.static(__dirname + '/../client/dist'));
// app.use(bodyParser.json());

app.get('/', (req, res) => {
  console.log('Got an index request');
  res.send('The Legend Arthur is here.');
});

app.listen(PORT, () => {
  console.log('The Arthurs are listening on port 3000');
});
