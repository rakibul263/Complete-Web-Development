/* Object destructuring হলো JavaScript-এর একটি feature যা আপনাকে কোনো object-এর properties সহজে extract করতে সাহায্য করে এবং আলাদা variables-এ assign করতে দেয়। এর মাধ্যমে কোড অনেক clean এবং concise হয়।*/

// Example 1
/* const person = {
    name : 'Rakibul Hasan',
    age : 21,
    friends : ['Rakib', 'Rahim', 'Karim'],
}

const {name, age, friends} = person;

console.log(name);
console.log(age);
 */

//Example 2
const name = ["Rakibul", 23, "Web Developer"];

const [myName, myAge, myProfession] = name;

console.log(myName); 