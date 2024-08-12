// In this homework, you will be building a "hangman" game. 
// Create a new variable and put a random word in
let word = ("happy")


// Create a new variable called attempts and set it to 0
let attempts = 0


// Prompt the user to guess a letter
let letter = prompt("Guess a letter")
if (letter === "h"){
  console.log("nice now try to guess the word")

}else{
  console.log("Sorry ur wrong try again ") 


}


// Write an if statement that uses the includes() method to check if the letter is in the word -- Google the syntax!
// Tell the user if their letter is in the word
if (letter.includes("word")){
  console.log('the letter "${letter}" is in the word')
  i++
}

// Prompt the user to guess the word 
let guess = prompt("Guess the word")




   



// Write an if/else statement that checks if the user guess is equal to your word and tells the user
if (guess === "happy"){
  console.log("Congrats your right")

}else{
  console.log("Sorry ur wrong try again ")
}



// Now we will combine this input a while loop!
// Create a while loop that runs while the user guess is not equal to the word
// In the while loop, copy the prompt and if/else check for a letter


// In the while loop, copy the prompt and if/else check for the word


// In the while loop, copy the attempts increment



// After the while loop, print "It took (attempts) attempts" 

