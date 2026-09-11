const dns = require("dns");

dns.setServers(["8.8.8.8"]);

require("dotenv").config();

const mongoose = require("mongoose");
const connectDB = require("./config/db");
const Product = require("./models/Product");

const seedProducts = async () => {
  try {
    await connectDB();

    const response = await fetch("https://dummyjson.com/products?limit=0");

    const data = await response.json();

    const products = data.products.map((product) => ({
      title: product.title,
      description: product.description,
      price: product.price,
      category: product.category,
      brand: product.brand,
      stock: product.stock,
      image: product.thumbnail,
    }));

    await Product.deleteMany();

    await Product.insertMany(products);

    console.log(`${products.length} products seeded successfully`);

    await mongoose.connection.close();

    process.exit(0);
  } catch (error) {
    console.error("Error seeding products:", error.message);

    await mongoose.connection.close();

    process.exit(1);
  }
};

seedProducts();
