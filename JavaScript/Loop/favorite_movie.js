let favorite_movie = "Avater";
let guess = prompt("Guess your favorite movie: ");
 
while(guess != favorite_movie){
    if(guess == "exit"){
        console.log("You exit the game");
        break;
    }
    console.log("You guess it wrong");
    guess = prompt("Guess your favorite movie: ");
}
if(guess == favorite_movie){
    console.log("Congratulation! You guess it right");
}