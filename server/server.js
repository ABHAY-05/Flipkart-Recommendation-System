const express = require("express");
var cookieParser = require("cookie-parser");
const cors = require('cors')

require("dotenv").config({ path: "./config/.env" });

require("./config/DBConnection");
const useRouter = require("./routes/router");

const DefaultData = require('./default');

const app = express();

// DefaultData();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use("/api", useRouter);

const port = process.env.PORT || 8000;


app.listen(port, () => console.log(`Server is running at ${port}`));
