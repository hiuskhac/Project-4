var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const apiKey = '3f4c2a25623688ac6f335ed6c917a393'
const cors = require('cors')

const app = express()

app.use(express.static('dist'))
app.use(cors());

console.log(__dirname)

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

app.get('/apikey', (req, res) => {
    const data = {
      text: apiKey
    };
    res.json(data);
  });

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})
