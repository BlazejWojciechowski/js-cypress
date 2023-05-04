const name = "Alicja";

if (name == "Alica") {
    firstF(10, 20)
} else {
    thirdF(10, 20)
}

function firstF(value1, value2) {
    const sum = value1 + value2;
    return console.log("Dodawanie! Pierwsza funkcja " + sum)
}

function thirdF(value1, value2) {
    const sum = value1 * value2;
    return console.log("Mnożenie! Trzecia funkcja " + sum)
}

//funkcja strzałkowa
/*
const secondF = () => {
    return console.log("Druga funkcja!")
}

secondF();
*/

