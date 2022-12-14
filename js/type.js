function type() {
    const typewriter = new Typewriter(document.getElementById(`Typewriter`), {
        loop: true
    });

    const phrases = [
        "marry my bitch and I treat her like marge",
        "ran up the numbers like it was scrimmage",
        "you niggas fa-a-ans",
        "money swollen like cyst",
        "i see it, i want it, i click it",
        "aim for the chest and higher",
    ]

    typewriter.typeString(phrases[getRandomInt(phrases.length)]).pauseFor(5000).deleteAll().pauseFor(100).callFunction(() => {
        typewriter.stop();
        type();
    }).start();
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
