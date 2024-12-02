function bubbleSort(arr) {
    let n = arr.length;
    let sortedArray = arr.slice(); // Create a copy of the array to avoid mutating the input array
    
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            if (sortedArray[j] > sortedArray[j + 1]) {
                // Swap the elements
                let temp = sortedArray[j];
                sortedArray[j] = sortedArray[j + 1];
                sortedArray[j + 1] = temp;
            }
        }
    }
    
    return sortedArray;
}

// Sample input
let inputArray = [5, 6, 1, 3, 4, 2];
let sortedArray = bubbleSort(inputArray);

console.log(sortedArray); // Expected output: [1, 2, 3, 4, 5, 6]



function steps(n) {
    for (let i = 1; i <= n; i++) {
        console.log('#'.repeat(i));
    }
}

// Sample usage
steps(2);
// Expected output:
// #
// ##

steps(3);
// Expected output:
// #
// ##
// ###


class Cylinder {
    constructor(radius, height) {
        this.radius = radius;
        this.height = height;
    }

    // Method to calculate the volume of the cylinder
    getVolume() {
        let volume = Math.PI * Math.pow(this.radius, 2) * this.height;
        return volume.toFixed(4); // Return the volume rounded to four decimal places
    }
}

// Example usage
const cylinder = new Cylinder(5, 10);
console.log(`Volume of the cylinder: ${cylinder.getVolume()}`);

// Example with different dimensions
const anotherCylinder = new Cylinder(7, 14);
console.log(`Volume of the cylinder: ${anotherCylinder.getVolume()}`);
