// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
  const submitBtn = document.getElementById("submitBtn");

  // Attach the click event to the button
  submitBtn.addEventListener("click", processData);
});

// Main function to process the input
function processData() {
  const name = document.getElementById('name').value.trim();
  const ageInput = document.getElementById('age').value.trim();
  const output = document.getElementById('output');
  const age = Number(ageInput);     

  output.textContent = ""; // Clear previous result

  if (isNaN(age) || ageInput === "") {
    console.error("Error: Please enter a valid numeric age.");
    output.textContent = "Please enter a valid numeric age.";
    output.style.color = "red";
    return;
  }

  if (age < 18) {
    output.textContent = `Hello ${name}, you are underage. Keep learning and enjoying coding!`;
    output.style.color = "#ff9900";
  } else {
    output.textContent = `Hello ${name}, you are an adult. Get ready for amazing opportunities in programming!`;
    output.style.color = "green";
  }
}