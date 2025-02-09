const student = {
    name : "Rakibul Hasan",
    age : 21,
    profession : "Developer",
    City : "Dhaka"
}

console.log(student.name);
console.log(student["name"]);


student.age += 3;
student["age"] += 4;

console.log(student);

