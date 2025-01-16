// "This" keyword refers to an object that is executing the current function.
let students = {
    name : "Rakibul",
    age : 21,
    math : 96,
    eng : 85,
    bangla : 90,
    getAvg(){
        let avg = (this.math + this.eng + this.bangla)/3;
        console.log(avg);
    }
};

students.getAvg();