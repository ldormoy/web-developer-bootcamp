function factorial(num) {
    if (num === 0) {
        return 1;
    }

    var result = num;
    for (var i = num - 1; i >= 1; i--) {
        result *= i;
    }
    return result;
}

