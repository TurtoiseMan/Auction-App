const { sequelize, Item } = require("./db");

async function seedDatabase() {
  try {
    await sequelize.sync({ force: true });

    await Item.bulkCreate([
      {
        itemName: "Macbook 2019",
        itemDescription: "This is a sample item for testing purposes",
        itemImageUrl:
          "https://m.media-amazon.com/images/I/71TPda7cwUL._AC_SL1500_.jpg",
        startingBid: "50",
        currentBid: "60",
        remainingTime: 3600,
      },
      {
        itemName: "Razer Laptop",
        itemDescription: "This is a sample item for testing purposes",
        itemImageUrl:
          "https://4.img-dpreview.com/files/p/E~TC1200x675S1200x675~articles/6096287211/DLCS1672-Edit.jpeg",
        startingBid: "50",
        currentBid: "60",
        remainingTime: 3600,
      },
      {
        itemName: "Pixel 6a",
        itemDescription: "This is a sample item for testing purposes",
        itemImageUrl:
          "https://files.refurbed.com/ii/google-pixel-4-xl-1571208276.jpg?t=resize&h=600&w=800",
        startingBid: "50",
        currentBid: "60",
        remainingTime: 3600,
      },
      {
        itemName: "Iphone 15",
        itemDescription: "This is a sample item for testing purposes",
        itemImageUrl:
          "https://www.apple.com/newsroom/images/product/iphone/standard/Apple_iPhone-13-Pro_iPhone-13-Pro-Max_09142021_inline.jpg.slideshow-medium_2x.jpg",
        startingBid: "50",
        currentBid: "60",
        remainingTime: 3600,
      },
    ]);

    console.log("Database seeded successfully");
    process.exit(0);
  } catch (error) {
    console.error("Error seeding the database:", error);
    process.exit(1);
  }
}

seedDatabase();
