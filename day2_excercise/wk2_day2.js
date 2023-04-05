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

sumNumbers(15);
