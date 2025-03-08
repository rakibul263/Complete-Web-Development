const hena = {
    name: "Rakibul Hasan",
    age : 23,
    dept: "CSE",
    friends: ['Hero Alom', 'Bappa Talukdar'],
    status : "not found"
}

// const henaStatus = hena.status;
// const name = hena.name;
// console.log(henaStatus);

const {name, age, dept, friends, status} = hena;

console.log(name);
console.log(friends[1]);
console.log(dept);


//array
const person = ["Hero Alom", {name: "Rakibul"}, "Hena", "Bapparaj"];

const [nayok, amarName, naika, kholnayok] = person;

console.log(nayok);
