function  validProposal( person1 , person2 ){
    if(typeof person1 == 'object' && typeof person2 == 'object'){
        if((person1.gender == 'male' && person2.gender =='female' || person1.gender=='female' && person2.gender=='male') && Math.abs(person1.age - person2.age) <= 7){
            // console.log(Math.abs(person1.age - person2.age))
            return true;
        }else{
            return false;
        }
    }else{
        return 'Invalid';
    }
}


const person1 = { name: "Rahul", gender: "male", age: 28 };
const person2 = { name: "Joya", gender: "female", age: 21 };

console.log(validProposal(person1, person2));


const person3 = { name: "milon", gender: "male", age: 20 };
const person4 = { name: "sumi", gender: "female", age: 25 };

console.log(validProposal(person3, person4));

const person5 = { name: "shuvo", gender: "male", age: 20 };
const person6 = { name: "joy", gender: "male", age: 25 } ;

console.log(validProposal(person5, person6));

const person7 = { name: "toya", gender: "female", age: 20 };
const person8 = { name: "kader", gender: "male", age: 25 };

console.log(validProposal(person7, person8));

const person9 = { name: "toya", gender: "female", age: 24 };
const person10 = { name: "bjoy", gender: "male", age: 32 };

console.log(validProposal(person9, person10));

const person11 = "Mizan";
const person12 = { name: "mitu", gender: "male", age: 32 };

console.log(validProposal(person11, person12));

const person13 = { name: "mitu", gender: "male", age: 32 };
const person14 = "Mizan" ;

console.log(validProposal(person13, person14));



