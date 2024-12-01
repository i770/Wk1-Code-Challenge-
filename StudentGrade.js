const readlineSync = require('readline-sync');

function getStudentGrade() {
    while (true) {
        // Prompt the user to input student marks
        let input = readlineSync.question("Enter student marks (0-100): ");

        // Convert the input to a number
        let marks = Number(input);

        // Check if the input is a valid number within the range
        if (!isNaN(marks) && marks >= 0 && marks <= 100) {
            let grade;

            // Determine the grade based on the input
            if (marks > 79) {
                grade = "A";
            } else if (marks >= 60) {
                grade = "B";
            } else if (marks >= 50) {
                grade = "C";
            } else if (marks >= 40) {
                grade = "D";
            } else {
                grade = "E";
            }

            // Output the grade
            console.log(`The grade is: ${grade}`);
            break;
        } else {
            console.log("Invalid input. Please enter a number between 0 and 100.");
        }
    }
}

// Call the function
getStudentGrade();
