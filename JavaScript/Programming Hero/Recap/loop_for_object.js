const person = {
    name : "Rakibul Hasan",
    age  : 23,
    country : "Bangladesh"
}

for(let key in person){
    console.log(key , person[key]);
}


// console.log(person["age"]);


for(let key of  Object.entries(person)){
    console.log(key);
}


for(let [key, value] of Object.entries(person)){
    console.log(`key is ${key} and value is ${value}`)
}