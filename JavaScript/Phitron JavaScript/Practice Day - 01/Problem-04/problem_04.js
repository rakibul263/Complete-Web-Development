function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      return "Leap Year";
    }
    return "Not a Leap Year";
  }
  
  let year = parseInt(prompt("Enter Year:"));
  
  if (!isNaN(year)) {
    console.log(isLeapYear(year));
  } else {
    console.log("Enter valid year");
  }
  