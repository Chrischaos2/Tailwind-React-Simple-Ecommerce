const dns = require("dns");

dns.setServers(["8.8.8.8"]);

require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const productRoutes = require("./routes/productRoutes");

const app = express();
app.use(cors());

const PORT = process.env.PORT || 5000;

connectDB();
app.use("/api/products", productRoutes);

app.get("/", (req, res) => {
  res.send("ShopEase Backend API is running");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
