const { Sequelize, DataTypes } = require("sequelize");
console.log(process.env.DATABASE_URL);
console.log(process.env.USE_SSL);
const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: "postgres",
  protocol: "postgres",
  dialectOptions: {
    ssl:
      process.env.USE_SSL === "true"
        ? {
            require: true,
            rejectUnauthorized: false,
          }
        : false,
  },
});
sequelize
  .authenticate()
  .then(() => console.log("Database connected."))
  .catch((err) => console.error("Unable to connect to the database:", err));

const Item = sequelize.define("Item", {
  itemId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  itemName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  itemDescription: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  itemImageUrl: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  startingBid: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  currentBid: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  remainingTime: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = {
  sequelize,
  Item,
};
