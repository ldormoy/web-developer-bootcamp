var faker = require('faker');

console.log("### WELCOME TO MY SMALL BAZAR!!! ###");

for (var i = 0; i < 10; i++) {
    console.log(faker.fake("{{commerce.productName}} - ${{commerce.price}}"));
}
