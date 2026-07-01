import Jacket from "../assets/jacket (1).jpg";
import Wallet from "../assets/wallet (1).jpg";
import Watch from "../assets/watch (1).jpg";
import Tablet from "../assets/tablet (1).jpg";
import Headphones from "../assets/headphones (1).jpg";
import Hoodie from "../assets/hoodie (1).jpg";
import Sneakers from "../assets/sneakers (1).jpg";
import Backpack from "../assets/backpack (1).jpg";

const products = [
  {
    id: 1,
    name: "Leather Jacket",
    image: Jacket,
    category: "Jackets",
    price: 80,
  },
  {
    id: 2,
    name: "Leather Wallet",
    image: Wallet,
    category: "Accessories",
    price: 25,
  },
  {
    id: 3,
    name: "Apple Watch Series 6",
    image: Watch,
    category: "Watches",
    price: 80,
  },
  {
    id: 4,
    name: "Samsung Galaxy Tab",
    image: Tablet,
    category: "Tablets",
    price: 150,
  },
  {
    id: 5,
    name: "Sony WH-1000XM4",
    image: Headphones,
    category: "Headphones",
    price: 200,
  },
  {
    id: 6,
    name: "Versatile Hoodie",
    image: Hoodie,
    category: "Hoodies",
    price: 50,
  },
  {
    id: 7,
    image: Sneakers,
    name: "Nike Air Max 270",
    category: "Sneakers",
    price: 120,
  },

  {
    id: 8,
    image: Backpack,
    name: "Leather Backpack",
    category: "Backpack",
    price: 25,
  },
];

export default products;
