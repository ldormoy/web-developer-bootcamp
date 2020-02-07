var movieDB = [
    {
        title: "Big Lebowski",
        rating: 5,
        haveSeen: true
    },
    {
        title: "Mulholland Drive",
        rating: 3.5,
        haveSeen: false
    },
    {
        title: "Seven",
        rating: 4,
        haveSeen: true
    }
]

for (var i = 0; i < movieDB.length; i++) {
    var verb = "not seen";
    if (movieDB[i].haveSeen == true) {
        verb = "watched";
    }
    console.log("You have " + verb + " \"" + movieDB[i].title + "\" - " + movieDB[i].rating + " stars")
}
