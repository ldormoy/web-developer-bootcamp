function printReverse(element, index, array) {
    var result = array[(array.length - 1) - index];
    console.log(result);
}

["a", "b", "c", "d"].forEach(printReverse)
