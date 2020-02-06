function sumArray(array) {
    var result = 0;
    for (var i = 0; i < array.length; i++) {
        result += array[i];
    }
    console.log(result);
}

sumArray([1, 2, 3, 4]);
