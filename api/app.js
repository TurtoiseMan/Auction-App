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
} = require("./controllers");

const app = express();
const port = 3000;

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

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
