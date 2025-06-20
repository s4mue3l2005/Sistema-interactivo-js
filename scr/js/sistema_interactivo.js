// Function to handle user input and display appropriate message
function processData() {
  const name = document.getElementById('name').value.trim();
  const ageInput = document.getElementById('age').value.trim();
  const output = document.getElementById('output');

  const age = Number(ageInput);

  // Clear previous result
  output.textContent = "";

  // Check if age is a valid number
  if (isNaN(age) || ageInput === "") {
    console.error("Error: Please enter a valid numeric age.");
    output.textContent = "Please enter a valid numeric age.";
    output.style.color = "red";
    return;
  }

  // Show personalized message based on age
  if (age < 18) {
    output.textContent = `Hello ${name}, you are underage. Keep learning and enjoying coding!`;
    output.style.color = "#ff9900";
  } else {
    output.textContent = `Hello ${name}, you are an adult.`;
    output.style.color = "green";
  }
}
