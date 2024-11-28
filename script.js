let selectedRating = null;
const ratingSection = document.querySelector('#rating-section');
const thankYouSection = document.querySelector('#thank-you-section');

function selectRating(rating) {
  if (selectedRating == rating) {
    selectedRating = null;
    resetButtonStyles();
  } else {
    selectedRating = rating;
    resetButtonStyles();
    document.getElementById("rating" + rating).classList.add("selected");

    // document.getElementById("rating" + rating).style.backgroundColor = "white";
    // document.getElementById("rating" + rating).style.color = "black";
  }
}
function resetButtonStyles() {
  for (let i = 1; i <= 5; i++) {
    const button = document.getElementById("rating" + i);
    button.classList.remove("selected");

    // document.getElementById("rating" + i).style.backgroundColor = "hsl(216, 12%, 8%)";
    // document.getElementById("rating" + i).style.color = "white";
  }
}

function submitRating() {
  if (selectedRating == null) {
    alert("Please select a rating before submitting.");
    return;
  } else {
      document.getElementById("selects").innerHTML = `You selected ${selectedRating} out of 5`;
      ratingSection.style.display = 'none'; // Hide the rating section
      thankYouSection.style.display = 'block'; // Show the thank you section
  }
}
