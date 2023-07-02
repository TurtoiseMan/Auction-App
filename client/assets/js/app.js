function handleItemClick(event) {
  const itemCard = event.currentTarget;

  const itemId = itemCard.dataset.itemId;

  window.location.href = `item-details.html?id=${itemId}`;
}

function createItemCard(item) {
  const itemCard = document.createElement("div");
  itemCard.classList.add("item-card");
  itemCard.dataset.itemId = item.itemId;
  const itemImage = document.createElement("img");
  itemImage.src = item.itemImageUrl;
  itemImage.alt = "Item Image";
  itemImage.classList.add("item-image");
  itemCard.appendChild(itemImage);

  const itemDetails = document.createElement("div");
  itemDetails.classList.add("item-details");

  const itemName = document.createElement("h2");
  itemName.classList.add("item-name");
  itemName.textContent = item.itemName;
  itemDetails.appendChild(itemName);

  const itemDescription = document.createElement("p");
  itemDescription.classList.add("item-description");
  itemDescription.textContent = item.itemDescription;
  itemDetails.appendChild(itemDescription);

  const itemBid = document.createElement("p");
  itemBid.classList.add("item-bid");
  itemBid.textContent = `Current Bid: ${item.currentBid}`;
  itemDetails.appendChild(itemBid);

  const itemTime = document.createElement("p");
  itemTime.classList.add("item-time");
  itemTime.textContent = `Time Left: ${item.remainingTime}`;
  itemDetails.appendChild(itemTime);

  itemCard.appendChild(itemDetails);

  itemCard.addEventListener("click", handleItemClick);

  return itemCard;
}

const itemContainer = document.getElementById("item-container");

fetch(`https://auction-app-cew6.onrender.com/auction-items/`)
  .then((response) => response.json())
  .then((data) => {
    // console.log(data);
    data.forEach((item) => {
      const itemCard = createItemCard(item);
      itemContainer.appendChild(itemCard);
    });
  })
  .catch((error) => {
    console.error("Error:", error);
  });
