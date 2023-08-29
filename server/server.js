const express = require("express");

require("dotenv").config({ path: "./config/.env" });

require("./config/DBConnection");
const useRouter = require("./routes/router");

const DefaultData = require('./default');

const app = express();

// DefaultData();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", useRouter);

const port = process.env.PORT || 8000;


app.listen(port, () => console.log(`Server is running at ${port}`));
