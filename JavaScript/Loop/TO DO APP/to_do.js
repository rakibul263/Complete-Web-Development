let todo = [];
let req = prompt("Please ! Enter your request: ");

while(true){
    if(req.toLowerCase() == "quit"){
        console.log("You quit the app");
        break;
    }

    if(req.toLowerCase() == "list"){
        console.log("**********");
        for(task of todo){
            console.log(task);
        }
        console.log("**********");
    }else if(req.toLowerCase() == "add"){
        let newTask = prompt("Enter new task: ");
        todo.push(newTask);
        console.log("Task added successfully");
    }else if(req.toLowerCase() == "delete"){
        let index = parseInt(prompt("Enter the index of task to delete: "));
        todo.splice(index, 1);
        console.log("Task deleted successfully");
    }else{
        console.log("Invalid request");
    }
    req = prompt("Please ! Enter your request: ");
}

