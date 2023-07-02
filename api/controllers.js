const { Item } = require("./db");

async function getAuctionItems(req, res) {
  try {
    const items = await Item.findAll({ order: [["itemId", "ASC"]] });
    res.json(items);
  } catch (error) {
    console.error("Error retrieving auction items:", error);
    res.sendStatus(500);
  }
}

async function createAuctionItem(req, res) {
  try {
    const {
      itemName,
      itemDescription,
      itemImageUrl,
      startingBid,
      currentBid,
      remainingTime,
    } = req.body;

    if (
      !itemName ||
      !itemDescription ||
      !itemImageUrl ||
      !startingBid ||
      !currentBid ||
      !remainingTime
    ) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const item = await Item.create({
      itemName,
      itemDescription,
      itemImageUrl,
      startingBid,
      currentBid,
      remainingTime,
    });

    res.status(201).json(item);
  } catch (error) {
    console.error("Error creating auction item:", error);
    res.sendStatus(500);
  }
}

async function getAuctionItem(req, res) {
  try {
    const itemId = req.params.itemId;
    const item = await Item.findByPk(itemId);

    if (!item) {
      return res.status(404).json({ error: "Item not found" });
    }

    res.json(item);
  } catch (error) {
    console.error("Error retrieving auction item:", error);
    res.sendStatus(500);
  }
}

async function updateAuctionItem(req, res) {
  try {
    const itemId = req.params.itemId;
    const {
      itemName,
      itemDescription,
      itemImageUrl,
      startingBid,
      // currentBid,
      remainingTime,
    } = req.body;

    const item = await Item.findByPk(itemId);
    if (!item) {
      return res.status(404).json({ error: "Item not found" });
    }

    if (
      !itemName &&
      !itemDescription &&
      !itemImageUrl &&
      !startingBid &&
      !remainingTime
    ) {
      return res
        .status(400)
        .json({ error: "At least one field is required for update" });
    }

    if (itemName) {
      item.itemName = itemName;
    }
    if (itemDescription) {
      item.itemDescription = itemDescription;
    }
    if (itemImageUrl) {
      item.itemImageUrl = itemImageUrl;
    }
    if (startingBid) {
      item.startingBid = startingBid;
    }
    // if (currentBid) {
    //   item.currentBid = currentBid;
    // }
    if (remainingTime) {
      item.remainingTime = remainingTime;
    }

    await item.save();

    res.sendStatus(200);
  } catch (error) {
    console.error("Error updating auction item:", error);
    res.sendStatus(500);
  }
}

async function deleteAuctionItem(req, res) {
  try {
    const itemId = req.params.itemId;

    const item = await Item.findByPk(itemId);
    if (!item) {
      return res.status(404).json({ error: "Item not found" });
    }

    await item.destroy();

    res.sendStatus(200);
  } catch (error) {
    console.error("Error deleting auction item:", error);
    res.sendStatus(500);
  }
}

async function handleBid(req, res) {
  try {
    const itemId = req.params.itemId;
    const { currentBid } = req.body;

    if (!currentBid) {
      return res.status(400).json({ error: "Missing bid amount" });
    }

    const item = await Item.findByPk(itemId);
    if (!item) {
      return res.status(404).json({ error: "Item not found" });
    }

    if (currentBid > item.currentBid) {
      item.currentBid = currentBid;
      await item.save();

      res.sendStatus(200);
    } else {
      res
        .status(400)
        .json({ error: "Bid amount should be higher than the current bid" });
    }
  } catch (error) {
    console.error("Error handling bid:", error);
    res.sendStatus(500);
  }
}

module.exports = {
  getAuctionItems,
  createAuctionItem,
  getAuctionItem,
  updateAuctionItem,
  deleteAuctionItem,
  handleBid,
};
