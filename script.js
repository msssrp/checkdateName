// Function to get day name from a given date
function getDayName() {
    // Get the input date value from the form
    const inputDate = document.getElementById("dateInput").value;
  
    // Parse the input date using Moment.js
    const dateObject = moment(inputDate, "YYYY-MM-DD");
  
    // Check if the input date is valid
    if (!dateObject.isValid() || !dateObject.isSame(inputDate, "day")) {
      // Display an error message in the result div
      document.getElementById("result").innerHTML = "Invalid or non-existent date";
      return;
    }
  
    // Get the day of the week as an integer (0 = Sunday, 1 = Monday, etc.)
    const dayOfWeek = dateObject.day();
  
    // Create an array to map the integer value to day names
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
    // Get the day name from the array using the dayOfWeek value
    const dayName = dayNames[dayOfWeek];
  
    // Display the day name in the result div
    document.getElementById("result").innerHTML = `The day name for the input date is: ${dayName}`;
  }