let students={
    name : "Rakibul",
    age : 21,
    marks : 97,
    getName : function(){
        console.log(this.name);//normal function called parent functoin
    },

    getMarks : () => {
        console.log(this.marks);
    }
}

students.getName();
students.getMarks();// undefined bz arrow function called grand parent function object