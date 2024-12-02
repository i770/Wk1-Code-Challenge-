const readlineSync = require('readline-sync');

function checkSpeed() {
    // Prompt the user to input the speed of the car
    let speed = readlineSync.question("Enter the speed of the car (km/s): ");
    
    // Convert the input to a number
    speed = Number(speed);

    // Check if the input is a valid number
    if (isNaN(speed) || speed < 0) {
        console.log("Invalid input. Please enter a valid number.");
        return;
    }

    // Speed limit
    const speedLimit = 70;
    // Points for every 5 km/s over the speed limit
    const kmPerPoint = 5;

    if (speed <= speedLimit) {
        console.log("Ok");
    } else {
        // Calculate the number of demerit points
        const demeritPoints = Math.floor((speed - speedLimit) / kmPerPoint);
        console.log(`Points: ${demeritPoints}`);

        // Check if demerit points exceed the limit
        if (demeritPoints > 12) {
            console.log("License suspended");
        }
    }
}

// Call the function
checkSpeed();
