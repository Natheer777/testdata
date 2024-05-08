// const express = require("express");
// const bodyParser = require('body-parser');
// const pool = require("../server/Config/Dbnode");
// // const UserController = require("../server/Controllers/Usecontroller");
// const route = require("../server/Routers/Route");

// const app = express();
// const PORT = process.env.PORT || 3000;
// app.use(route);
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// app.use(express.static('public'));
 
// // app.get("/input", (req, res) => {
// //   res.sendFile(__dirname + "/public/index.html");
// // });
// // app.post("/adduser", async (req, res) => {
// //   const {name , details, more} = req.body;

// //   try {
// //     const result = await UserController.addUser(name , details, more);
// //     res.send("تمت إضافة المستخدم بنجاح!");
// //   } catch (error) {
// //     console.error("فشلت عملية إضافة المستخدم:", error);
// //     res.status(500).send("حدث خطأ أثناء إضافة المستخدم.");
// //   }
// // });



// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const route = require('../server/Routers/Route');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON and URL-encoded bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(route)
// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Define a single route handler to serve HTML files based on route parameter
app.get("/:page", (req, res) => {
  const { page } = req.params;

  // Define allowed pages and corresponding HTML files
  const allowedPages = {
    "input": "adduser.html",
    "delete": "delete.html",
    "edite": "edite.html"
  };

  // Check if the requested page is allowed
  if (page in allowedPages) {
    const htmlFilePath = path.join(__dirname, "public", allowedPages[page]);
    res.sendFile(htmlFilePath);
  } else {
    res.status(404).send('Page not found');
  }
});

// Handle form submission for adding a new user
app.post("/adduser", (req, res) => {
  // Process the form data (e.g., save to database)
  const { name, details, more } = req.body;
  // Example: Save the data to a database
  // database.saveUser(name, details, more);
  res.send('User added successfully'); // Respond with a message or redirect
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
