/********* create variables *********/

let days = [0,0,0,0,0], // array to store whether a day is selected or not
    rate = 35, // default daily rate
    mon = document.getElementById("monday"), // element for Monday
    tue = document.getElementById("tuesday"), // element for Tuesday
    wed = document.getElementById("wednesday"), // element for Wednesday
    thu = document.getElementById("thursday"), // element for Thursday
    fri = document.getElementById("friday"), // element for Friday
    full = document.getElementById("full"), // element for full-day rate
    half = document.getElementById("half"), // element for half-day rate
    calculatedCost = document.getElementById("calculated-cost"), // element to display calculated cost
    clearBtn = document.getElementById("clear-button") // element for clear button
    

/********* colour change days of week *********/

// function to calculate the total cost based on selected days and rate
function calculate(days, rate) {
    let daysSelected = 0,
        totalCost = 0;

    // loop through the days array and count the number of selected days
    for(let i=0; i<days.length; i++) {
        if(days[i] != 0) {
            daysSelected += 1;
        }
    }

    // calculate the total cost by multiplying the number of selected days by the daily rate
    totalCost = daysSelected * rate;

    // update the calculated cost element with the total cost
    calculatedCost.innerHTML = totalCost;
}

// function to handle day button clicks
function dayClicked(day, dayNumber) {
    // if the day is not already selected, mark it as selected
    if(days[dayNumber] != 1) {
        days[dayNumber] = 1;
    }

    // add the "clicked" class to the element for the selected day
    day.classList.add("clicked");

    // calculate the total cost and update the calculated cost element
    calculate(days, rate);
}

// event listeners for the day buttons
mon.addEventListener("click", () => dayClicked(mon, 0));
tue.addEventListener("click", () => dayClicked(tue, 1));
wed.addEventListener("click", () => dayClicked(wed, 2));
thu.addEventListener("click", () => dayClicked(thu, 3));
fri.addEventListener("click", () => dayClicked(fri, 4));



/********* clear days *********/

// function to clear all selected days and reset the calculated cost to 0
function clearDays() {
    // loop through the days array and mark all days as not selected
    for(let i=0; i<days.length; i++) {
        days[i] = 0;
    }

    // reset the calculated cost element to 0
    calculatedCost.innerHTML = 0;

    // remove the "clicked" class from all day elements
    mon.classList.remove("clicked");
    tue.classList.remove("clicked");}
   
