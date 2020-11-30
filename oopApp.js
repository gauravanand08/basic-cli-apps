/**
 * Create an quiz app
 */
//global variable declaration
const log = console.log;
const chalk = require('chalk');
var readLine = require('readline-sync'); //import readline-sync pakage
var userName = readLine.question(chalk.green.bold('Enter your name? '));
var answer;
var score = 0;
//declaration of questions object array
var questionObjArray = [
  q1 = {
    q:"Which of following is shared structure of a set of similar objects ",
    options:["Encapsulation","Class","Inheritance", "None of Above"],
    a:"Class"
  },
  q2 = {
    q:"Which of following does not have a body ",
    options:["Interface","Class","Abstract Method", "None of Above"],
    a:"Abstract Method"
  },
  q3 = {
    q:"Which of following is pure object oriented programming language? ",
    options:["Java","SmallTalk","C++", "Kotlin"],
    a:"SmallTalk"
  },
  q4 = {
    q:"In oops public, private & protected are ",
    options:["Classes","Access Modifiers","Interfaces","Method signature"],
    a:"Access Modifiers"
  },
  q5 = {
    q:"A private member of a class is visible to ",
    options:["every where","in sub class","members to same package","only members of same class"],
    a:"only members of same class"
  },
  q6 = {
    q:"OOPs is invented by?",
    options:["Andrea Ferro","Dennis Ritchie","Adele Goldberg","Alan Kay"],
    a:"Alan Kay"
  },
  q7 = {
    q:"Which Feature of OOP encourges the code reusability?",
    options:["Polymorphism","Inheritance","Abstraction","Encapsulation"],
    a:"Inheritance"
  },
  q8 = {
    q:"Which language doesn't support single level inheritance?",
    options:["C lanaguage","Java","Kotlin","C++"],
    a:"C lanaguage"
  },
  q9 = {
    q:"Which of the following is universal class for exception handling?",
    options:["Object","Errors","Exceptions","Maths"],
    a:"Exceptions"
  },
  q10 = {
    q:"How many catch blocks you can use with single Try block?",
    options:["Only 2","Only 1","Maximum 256","As many as required"],
    a:"As many as required"
  }
]
//Welcome user using log message
log(chalk.yellow.bold("Welcome "+userName+". Let's Start!"));

  quizPlay(questionObjArray);

//Function to accept question,answers and options related to that
function quizPlay(questionObjArray){

 for(var i=0; i<questionObjArray.length;i++){
   log(chalk.red.bold(questionObjArray[i].q));
   answer = readLine.keyInSelect(questionObjArray[i].options);
   if(questionObjArray[i].options[answer]===questionObjArray[i].a){
      log(chalk.green.bgYellow.bold("U r Correct"));
      score++;
  }
  else{
      log(chalk.bgRed.bold("U r wrong"));
      log(chalk.bgCyan.bold("The correct answer is "+questionObjArray[i].a));
    }
  }
  log(chalk.bgRed.bold("Your Final score is: " +score+"/"+questionObjArray.length));
  }