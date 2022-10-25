const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/homePage.html");
});
app.get("/aboutPage", (req, res) => {
  res.sendFile(__dirname + "/views/aboutPage.html");
});
app.get("/worksPage", (req, res) => {
  res.sendFile(__dirname + "/views/worksPage.html");
});
app.get("/photoGallery", (req, res) => {
  res.sendFile(__dirname + "/views/photoGallery.html");
});

const port = 3000;
app.listen(port, () => console.log("App is listening on port ${port}"));
