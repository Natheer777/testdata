const express = require("express");
const bodyParser = require("body-parser");
const pool = require("./Config/Dbnode");
const UserController = require("./Controllers/Usecontroller");
const route = require("./Routers/Route");

const app = express();
const PORT = process.env.PORT || 3000;
app.use(route)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (e.g., HTML, CSS, JS)
app.use(express.static('public'));

// Route to serve the input form HTML
app.get('/input', (req, res) => {
    res.sendFile(__dirname + '/public/input_form.html');
});

// Route to handle adding a new user
app.post('/adduser', async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const result = await UserController.addUser(name, email, password);
        res.send("تمت إضافة المستخدم بنجاح!");
    } catch (error) {
        console.error("فشلت عملية إضافة المستخدم:", error);
        res.status(500).send("حدث خطأ أثناء إضافة المستخدم.")
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
