// Initial array of fruits
let fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry'];

/**
 * Function to animate the push operation
 */
function animatePush() {
  // Get the fruitsList element from the DOM
  let fruitsList = document.getElementById('fruitsList');

  // Add a new fruit to the end of the array
  fruits.push('fig');

  // Clear the existing list
  fruitsList.innerHTML = '';

  // Iterate over the modified fruits array and create list items
  fruits.forEach(function(fruit) {
    let li = document.createElement('li');
    li.textContent = fruit;

    fruitsList.appendChild(li);
  });

  // Apply the 'added' class to the fruitsList to highlight the added item
  fruitsList.classList.add('added');

  // Remove the 'added' class after a delay
  setTimeout(function() {
    fruitsList.classList.remove('added');
  }, 1000);
}

// Get the startButton element from the DOM
let startButton = document.getElementById('startButton');

// Add click event listener to the startButton
startButton.addEventListener('click', function() {
  // Wait for 2 seconds and then initiate the animation
  setTimeout(animatePush, 2000);
});