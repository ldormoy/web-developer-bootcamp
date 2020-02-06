//with forEach
function printReverse(element, index, array) {
    var result = array[(array.length - 1) - index];
    console.log(result);
}

["a", "b", "c", "d"].forEach(printReverse)

//solution
function printReverse(arr) {
    for (var i = arr.length - 1; i >= 0; i--) {
        console.log(array[i]);
    }
}
