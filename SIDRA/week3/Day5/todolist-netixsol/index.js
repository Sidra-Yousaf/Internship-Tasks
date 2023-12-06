const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

let newItems = [];

app.get("/", (req, res) => {
  let options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  let today = new Date();
  let day = today.toLocaleDateString("en-US", options);
  console.log(day, "sid");
  res.render("list", { KindOfDay: day, newListItems: newItems  , checkboxChecked: checkboxChecked });
});
app.post("/", (req, res) => {
  let newItem = req.body.newItem;
  newItems.push(newItem);
  res.redirect("/");
});
const checkboxChecked = false;
app.listen(3000, () => console.log("port is running at 3000"));
///
