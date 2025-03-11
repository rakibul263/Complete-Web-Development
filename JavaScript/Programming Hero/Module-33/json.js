const Person = {
    name : "Rakibul",
    age : 20,
    firends : ["Tanvir", "Arman", "Ragib"]
}

const myObject = JSON.stringify(Person);
console.log(myObject);

const convertObj = JSON.parse(myObject);
console.log(convertObj);