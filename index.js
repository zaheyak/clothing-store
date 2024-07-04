//developers names : zaheya kdmany , kareen salamy

const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.json());

const port = process.env.PORT || 3001;
app.use(express.static(path.join(__dirname,"public")))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }));

const adminRoutes = require("./routes/admin");
const checkEditRoutes = require("./routes/login");
app.use((req, res, next) => {
  console.log(req.url + " 👀");
  next();
});
app.use("/admin", adminRoutes);
app.use("/login", checkEditRoutes);
app.listen(port);
