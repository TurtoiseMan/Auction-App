function handleFormSubmit(event) {
  event.preventDefault();

  // const itemName = document.getElementById("item-name").value;
  // const startingBid = document.getElementById("item-bid").value;
  // const remainingTime = document.getElementById("item-duration").value;
  // const itemDescription = document.getElementById("item-description").value;
  // const itemImageUrl = document.getElementById("item-image").value;
  const currentBid = document.getElementById("new-bid").value;
  // const editedItem = {
  //   itemName,
  //   startingBid,
  //   currentBid,
  //   remainingTime,
  //   itemDescription,
  //   itemImageUrl,
  // };
  const editedItem = { currentBid };

  // console.log(editedItem);

  fetch(`https://auction-app-cew6.onrender.com/auction-items/${itemId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(editedItem),
  })
    .then((response) => {
      if (response.ok) {
        window.location.href = `item-details.html?id=${itemId}`;
      } else {
        throw new Error("Request failed");
      }
    })
    .catch((error) => {
      console.error(error);
    });
}

const urlParams = new URLSearchParams(window.location.search);
const itemId = urlParams.get("id");

fetch(`https://auction-app-cew6.onrender.com/auction-items/${itemId}`)
  .then((response) => response.json())
  .then((item) => {
    document.getElementById("item-name").value = item.itemName;
    document.getElementById("item-bid").value = item.startingBid;
    document.getElementById("current-bid").value = item.currentBid;
    document.getElementById("item-duration").value = item.remainingTime;
    document.getElementById("item-description").value = item.itemDescription;
    // document.getElementById("item-image").value = item.itemImageUrl;
  })
  .catch((error) => {
    console.error("Error:", error);
  });

const editItemForm = document.getElementById("item-submit-button");
editItemForm.addEventListener("click", handleFormSubmit);
