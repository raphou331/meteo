require("dotenv").config({ path: "config.env" });
const express = require("express");
const router = require("./route/route");
const app = express();

/* app.use(express.json()); */
app.set("view engine", "ejs");
app.use(express.static("public"));

app.use("/", router);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`serveur demarré sur http://localhost:${PORT}`);
});
