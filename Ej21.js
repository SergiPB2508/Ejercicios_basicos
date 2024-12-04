const users = [
    { name: "Tony", years: 43 },
    { name: "Peter", years: 18 },
    { name: "Natasha", years: 14 },
    { name: "Bruce", years: 32 },
    { name: "Khamala", years: 16 },
];

let minorUsers = "Usuarios menores de edad:";
let olderUsers = "Usuarios mayores de edad:";

for (const x of users) {
    if (x.years >= 18) {
        olderUsers += " " + x.name;
    } else if(x.years < 18){
        minorUsers += " " + x.name;
    }
}

console.log(minorUsers);
console.log(olderUsers);

