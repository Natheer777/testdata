const express = require("express");
const bodyParser = require("body-parser");
const pool = require("./Config/Dbnode");
const UserController = require("./Controllers/Usecontroller");
const route = require("./Routers/Route");

const app = express();
const PORT = process.env.PORT || 3000;
app.use(route);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));
 
app.get("/input", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});
app.post("/adduser", async (req, res) => {
  const { name, details, more } = req.body;

  try {
    const result = await UserController.addUser(name, details, more);
    res.send("تمت إضافة المستخدم بنجاح!");
  } catch (error) {
    console.error("فشلت عملية إضافة المستخدم:", error);
    res.status(500).send("حدث خطأ أثناء إضافة المستخدم.");
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
