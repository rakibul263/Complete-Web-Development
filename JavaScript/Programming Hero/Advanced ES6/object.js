const person = {
    name : "Akash",
    age : 30,
    friends : ["Rakibul", "Alamin", "Arman"],
    details : {
        job : "YES",
        isMarrid : true,
        status : "Not Found",
        father : {
            name : "Faruk"
        }
    }
}

//optional chainnig
console.log(person.details.mother?.name);
console.log(person.details.father?.name);


// bracket notation
console.log(person["name"]);