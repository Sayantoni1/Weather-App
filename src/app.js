const express = require("express");
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

//public static path
const static_path = path.join(__dirname, "../public");

app.use(express.static(static_path));

//routing
app.get("/", (req, res) => {
    res.send("Home")
});

app.get("/about", (req, res) => {
    res.send("About Us")
});

app.get("/weather", (req, res) => {
    res.send("Weather")
});

app.get("*", (req, res) => {
    res.send("404 Error Page")
});

app.listen(port, () => {
    console.log(`server is running at port no ${port}`)
})