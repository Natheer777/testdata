const express = require('express');
const bodyParser = require('body-parser');
const route = require('../server/Routers/Route'); // Import your route file

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(route); // Mount your routes under /api

app.get("/edite", (req, res) => {
  res.sendFile(__dirname + "/public/edite.html");
 
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
