function sumNumbers(num) {
    let myArray = []

    for (i = 1; i < num; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            myArray.push(i);
        } else if (i % 3 === 0) {
            myArray.push(i);
        } else if (i % 5 === 0) {
            myArray.push(i);
        }
    }

    console.log(myArray);

    let sumMyArray = 0;
    let lengthMyArray = myArray.length

    for (i = 0; i < lengthMyArray; i++) {
        sumMyArray = sumMyArray + myArray[i];
    }

    console.log(sumMyArray);
    
}

sumNumbers(20);