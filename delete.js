const express = require('express');
const bodyParser = require('body-parser');
const route = require('../server/Routers/Route'); // Import your route file

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(route); // Mount your routes under /api

app.get("/delete", (req, res) => {
  res.sendFile(__dirname + "/public/delete.html");
 
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
