var comments = {};
comments.data = ["Good Job!", "Bye", "Lame..."];

comments.print = function () {
    this.data.forEach(function (el) {
        console.log(el);
    });
}

comments.print()
