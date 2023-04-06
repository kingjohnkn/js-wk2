// Write a program that takes a positive integer n as input and outputs the sum of all numbers between 1 and n that are divisible by 3 or 5(or both).

function sumNumbers(num) {
    // create empty array to add the numbers
    let myArray = [];

    for (i = 1; i < num; i++) {
        // add numbers div. by both 3 and 5 to array
        if (i % 3 === 0 && i % 5 === 0) { myArray.push(i); }
        // add numbers div. by 3 to array
        else if (i % 3 === 0) { myArray.push(i); }
        // add numbers div. by 5 to array
        else if (i % 5 === 0) { myArray.push(i); }
    }

    // console.log(myArray, "\n");

    // calculate the sum of the numbers in the array
    
    let sumMyArray = 0;
    // store the length of the array in a variable
    let lengthMyArray = myArray.length

    for (i = 0; i < lengthMyArray; i++) {
        sumMyArray = sumMyArray + myArray[i];
    }

    console.log(`Numbers divisible by 3 and 5 between 1 and ${num}: \n${myArray} \nand their sum is ${sumMyArray}`);
}

let number = prompt("Enter a number: ");

// check for valid user input
while (true) {
    if (number == 0) {
        // number not zero
        number = prompt(`Please enter a number greater than zero`);
    } else if (number < 0) {
        // number not less than zero
        number = prompt(`${number} is not valid! \nEnter a number greater than zero.`);
    } else if (number === null) {
        // not empty
        break;
    } else if (!Number.isInteger(Number(number)) && !isNaN(number)) {
        // number is not a float
        number = prompt(`${number} is a float! \nEnter a whole number.`);
    } else if (!isNaN(number)) {
        // run main when everything checks
        sumNumbers(number);
        break;
    } else {
        // number is not a number
        number = prompt(`${number} is not a number! \nEnter a number.`);
    }
}
