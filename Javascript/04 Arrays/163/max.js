function max(array) {
    var result = array[0];
    for (var i = 1; i < array.length; i++) {
        if (array[i] > result) {
            result = array[i];
        }
    }
    console.log(result);
}

max([-10, 25, 3, 4]);
