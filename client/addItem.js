document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("item-submit-button");
  form.addEventListener("click", addItem);
});

function addItem(event) {
  event.preventDefault();

  const itemName = document.getElementById("item-name").value;
  const itemBid = document.getElementById("item-bid").value;
  const itemDuration = document.getElementById("item-duration").value;
  const itemDescription = document.getElementById("item-description").value;
  const itemImage = document.getElementById("item-image").value;
  const newItem = {
    itemName: itemName,
    itemDescription: itemDescription,
    itemImageUrl: itemImage,
    startingBid: itemBid,
    currentBid: itemBid,
    remainingTime: itemDuration,
  };
  console.log(newItem);
  fetch("http://localhost:3000/auction-items/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newItem),
  })
    .then((response) => response.json())
    .then((data) => {
      window.location.href = `item-details.html?id=${data.itemId}`;
    })
    .catch((error) => {
      console.log("Error:", error);
    });
}
