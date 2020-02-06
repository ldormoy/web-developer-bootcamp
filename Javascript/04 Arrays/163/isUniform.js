function isUniform(array) {
    var first = array[0];
    for (var i = 1; i < array.length; i++) {
        var current = array[i]
        if (current !== first) {
            console.log("false");
            return false;
        }
    }
    console.log("true");
    return true;
}

isUniform([1, 1, 1, 2]);
