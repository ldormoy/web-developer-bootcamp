var age = Number(prompt("Enter an age"));

if (age < 0) {
    console.log("Error: age is negative");
}

if (age === 21) {
    console.log("happy 21st birthday!!");
}

if (age % 2 !== 0) {
    console.log("your age is odd!");
}

if (age % Math.sqrt(age) === 0) {
    console.log("perfect square!");
}
