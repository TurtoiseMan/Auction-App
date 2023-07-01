import { BASE_URL } from "./config";

const urlParams = new URLSearchParams(window.location.search);
const itemId = urlParams.get("id");

fetch(`${BASE_URL}/auction-items/${itemId}`)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    const item = data;

    if (item) {
      document.getElementById("item-image").src = item.itemImageUrl;
      document.getElementById("item-name").textContent = item.itemName;
      document.getElementById("item-description").textContent =
        item.itemDescription;
      document.getElementById(
        "item-starting-bid"
      ).textContent = `Starting Bid: ${item.startingBid}`;
      document.getElementById(
        "item-bid"
      ).textContent = `Current Bid: ${item.currentBid}`;
      document.getElementById(
        "item-time"
      ).textContent = `Time Left: ${item.remainingTime}`;
      const editButton = document.getElementById("edit-button");
      editButton.addEventListener("click", function () {
        window.location.href = `item-edit.html?id=${itemId}`;
      });
    } else {
      console.error("Item not found!");
    }
  })
  .catch((error) => {
    console.error("Error:", error);
  });
