//1. concatation is used to combine two strings into
//one string, while interpolation is way to use a
//variable(any type) at a later time.

//concatation:

console.log("My name is Binod, " + "I am male and 26 years old");

//interpolation:

let myName = "Binod";
let myGender = "male";
let myAge = 26;

console.log("my name is " + myName + ", I am " + myGender + " and " + myAge + " Years old");



// 2. DRY stands for Dont repeat yourself. DRY is an important
//concept because we need our codes to be efficient and
// if other methods work, we should avoid repeating. So far,
//we have learned loops that helps with DRY concept.



//3. declaring a variable is telling the computer that there is a 
//variable. this variable could have a value or be empty. assigning
//a value is actually giving the variable a value. Defining a 
//variable is same as declaring a variable.



//4. When we know that the value of a variable is not going to change
//we can use const. Otherwise, we should use let.


//5. Parent directory is a directory that contains the other 
//directory. for example if dir MUSIC contains REDROSES dir, 
//music is parent directory of the REDROSES directory.


//6. we can use -h or -help to get general help. "man + what you
//want to learn more about" is also a great tool.



//7. Tab completion is an easier way to write code where pressing
//tab after writing few letters fills the field for you.



//part 2:

//1. <
//2. >
//3. ===
//4. <,<
//5. ===, <
//6. !==
//7. ==


//part 3: 

//1. This is an infinite loop becasue there is no condition for
//the statement to be false. This will try to print the loop
//an infinite time

//2. This is not an infinite loop because of the last false statement.
//that statement makes runProgram false which in turn prevents
//the code from running.

//3. I though the code was going to just spit "A" because in the
//first line we said letters = "A". And you cannot add 1 to A, 
//hence the outcome of "A". but I was wrong, becasue it printed 
//out 21 "A"s. 



//part 4:

//1. The similarities are that both code run until the conditions
//is met/changes(depending on when the code is set to stop running).
//The for loops run the given number of times and stops running. The while loop
//run only until the conditions are true and it stops running.

//2.

for(i = 0; i <= 999; i++){
    console.log(i)
};

//3. 
//The first part of the control statement is: let i = 0;. This statement
//says that we start at index 0.
//The second part of the control statement is: i < 100;. This statement
//instructs the code to run upto 99 index, which is 100 times.
//The third part of the control statement is: i++. it says that 
//increase the index by 1 on every iteration.


//4.

for(i = 999; i >= 0; i--){
    console.log(i)
};


//5. 

let number = "The value of i is: "

for(i = 1; i <= 10; i++){
    console.log(number + i + " of 10") 
};






