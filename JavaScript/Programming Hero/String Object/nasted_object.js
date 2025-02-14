const college ={
    name : "CPSCR",
    class : [11, 12],
    event : ['display event', 'sports event', 'book fair'],
    unique: {
        dress_color : "gray blue",
        result : {
            gpa : 5,
            merit : 'top',
        }
    }
}

college.unique.result.merit = "top top top most college in the univers";

console.log(college.unique.result.merit);