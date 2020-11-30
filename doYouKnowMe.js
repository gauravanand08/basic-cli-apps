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
    q:"Do you know my Name ",
    options:["Gaurav","Rahul","Abhishek", "Kesari"],
    a:"Gaurav"
  },
  q2 = {
    q:"What do I do for living?",
    options:["Job","Real estate","Advisor", "Student"],
    a:"Job"
  },
  q3 = {
    q:"Which is my home state? ",
    options:["Jharkhand","West Bengal","Bihar", "Karnataka"],
    a:"Jharkhand"
  },
  q4 = {
    q:"Which month I was born?",
    options:["January","Februrary","November","December"],
    a:"Februrary"
  },
  q5 = {
    q:"What is my last name",
    options:["Anand","Kishore","Kumar","Singh"],
    a:"Anand"
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