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
const multer = require('multer');
const path = require('path'); // Import the 'path' module for file path operations

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Mount your routes under /api using the 'route' variable
const route = require('../server/Routers/Route');
app.use( route);

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Specify the destination folder for uploaded files
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname); // Use the original filename for uploaded files
  }
});
const upload = multer({ storage: storage });

// Serve adduser.html for /input route
app.get("/input", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "/adduser.html"));
});

// Serve delete.html for /delete route
app.get("/delete", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "/delete.html"));
});

// Serve edite.html for /edite route
app.get("/edite", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "/edite.html"));
});

// Handle file upload for /upload route
app.post("/upload", upload.single('file'), (req, res) => {
  // 'file' is the name attribute of the file input field in the HTML form
  res.send("File uploaded successfully");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
