const names = ["Jaś", "Krzyś", "Ola"];

console.log(names.length);
console.log(names);

names.push("Ania"); // dodawanie na końcu
console.log(names.length);
console.log(names);

names.pop(); // usuwanie z końca
console.log(names);

names.shift();
console.log(names); // usuwanie z początku

names.unshift("Karol"); // dodawanie na początku
console.log(names);

const indexElement = names.indexOf("Ola");
console.log(indexElement);

names.splice(indexElement, 1); // usuwanie elemntów z tablicy w prawą stronę od podanego elementu
console.log(names);

const string = names.join(" "); // łączy tablice w Stringa
console.log(string);

names.reverse();  // odwracanie tablicy
console.log(names);

names.push("Ala");
names.sort(); // sortowanie alfabateczne
console.log(names);

names.sort().reverse(); // odwracanie od Z do A
console.log(names);

// mapowanie elementów // filtrowanie
names.map(name => {
    if(name.length > 4) {
        console.log("Imie: " + name + " ma wiecej niz 4 znaki.")
    } else {
        console.log("Imie: " + name + " ma mniej niz 4 znaki.")
    }
})

const names2 = ["Rafał", "Wojtek", "Błażej"];

const names3 = names.concat(names2); // łączenie tablic
console.log(names3);