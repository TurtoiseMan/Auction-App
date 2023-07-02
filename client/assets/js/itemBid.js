function handleFormSubmit(event) {
  event.preventDefault();

  const bidAmount = document.getElementById("new-bid").value;

  const editedItem = { bidAmount };

  fetch(
    `https://auction-app-cew6.onrender.com/auction-items/item-bid/${itemId}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editedItem),
    }
  )
    .then((response) => {
      if (response.ok) {
        window.location.href = `item-details.html?id=${itemId}`;
      } else if (response.status === 400) {
        response.json().then((data) => {
          //   console.log(data.error);
          alert(data.error);
        });
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
  })
  .catch((error) => {
    console.error("Error:", error);
  });

const editItemForm = document.getElementById("item-submit-button");
editItemForm.addEventListener("click", handleFormSubmit);
