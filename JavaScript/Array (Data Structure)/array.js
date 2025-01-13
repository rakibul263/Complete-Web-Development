let students = ["Rakibul", "Hasan", "Shuvo"];
console.log(students);

students[1] = "Aysha";
console.log(students);

//add a student last of this array
students.push("Asha");
console.log(students);

//delete from end
students.pop();
console.log(students);

//add a student at the start of the array
students.unshift("Vola");
console.log(students);

//delete from start
console.log(students.shift());
console.log(students)