const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const {
  getAuctionItems,
  createAuctionItem,
  getAuctionItem,
  updateAuctionItem,
  deleteAuctionItem,
  handleBid,
} = require("./controllers");
const { sequelize } = require("./db");

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

const corsOptions = {
  origin: "*",
};
app.use(cors(corsOptions));

app.get("/auction-items", getAuctionItems);
app.post("/auction-items", createAuctionItem);
app.get("/auction-items/:itemId", getAuctionItem);
app.put("/auction-items/:itemId", updateAuctionItem);
app.delete("/auction-items/:itemId", deleteAuctionItem);
app.put("/auction-items/item-bid/:itemId", handleBid);

sequelize.sync();

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
