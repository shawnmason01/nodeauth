//npm modules
const express = require('express');

// create the server
const app = express();

// tell the server what port to listen on
app.listen(8080, () => {
  console.log('Listening on localhost:8080')
})