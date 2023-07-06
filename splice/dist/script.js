// Get the fruitsList element from the DOM
let fruitsList = document.getElementById("fruitsList");

// Initial array of fruits
let fruits = ["apple", "banana", "cherry", "date", "elderberry"];

/**
 * Function to animate the splice operation
 */
function animateSplice() {
  // Perform the splice operation and store the removed items
  let removedItems = fruits.splice(2, 2, "grape", "kiwi");

  // Clear the existing list
  fruitsList.innerHTML = "";

  // Iterate over the modified fruits array and create list items
  fruits.forEach(function (fruit) {
    let li = document.createElement("li");
    li.textContent = fruit;

    fruitsList.appendChild(li);
  });

  // Create list items for the removed items and apply the 'removed' class
  removedItems.forEach(function (removedItem) {
    let li = document.createElement("li");
    li.textContent = removedItem;
    li.classList.add("removed");

    fruitsList.appendChild(li);
  });

  // Apply the 'added' class to the fruitsList to highlight the added items
  fruitsList.classList.add("added");

  // Remove the 'added' class and remove the removed items after a delay
  setTimeout(function () {
    fruitsList.classList.remove("added");

    // Remove the removed items from the list
    removedItems.forEach(function (removedItem) {
      let removedElement = document.querySelector(".removed");
      removedElement.parentNode.removeChild(removedElement);
    });
  }, 1000);
}

// Wait for 2 seconds and then initiate the animation
setTimeout(animateSplice, 2000);