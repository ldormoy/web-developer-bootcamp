/* function kebabToSnake(string) {
    return string.replace("-", "_");
}
 */

function kebabToSnake(str) {
    newString = str.replace(/-/g, "_");
    return newString;
}
