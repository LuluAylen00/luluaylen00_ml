const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");

app.set("port",process.env.PORT || 3000)
app.listen(app.get("port"), () => console.log("Server started http://localhost:"+app.get("port")))

app.use(express.static(path.resolve(__dirname, "../public")));

app.use(require("./routes/web.js"));