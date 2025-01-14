// user enters a max number and then tries to guess a random generated number between 1 to the max number
const max = prompt("Enter the maximum number: ");

const random = Math.floor(Math.random() * max) + 1;

let guess = prompt("Enter your guess: ");


while(true){
    if(guess == "exit"){
        console.log("You quit the game");
        break;
    }

    if(random == guess){
        console.log("You guessed it correctly");
        break;
    }else{
        guess = prompt("Incorrect guess, try again: ");
    }
}