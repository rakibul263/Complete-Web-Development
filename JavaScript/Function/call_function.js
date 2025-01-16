const person = {
    fullName : function(){
        return this.fName +" "+ this.lName;
    }
};

let person1 = {
    fName : "Rakibul",
    lName : "Hasan"
};

let person2 = {
    fName : "Arman",
    lName : "Hossen"
};

let Name_1 = person.fullName.call(person2);
console.log(Name_1);
let Name_2 = person.fullName.call(person1);
console.log(Name_2);