var Questions = [
    {
        title:"What are carrot symbols?",
        choices: ["''","{}","<>","&&"],
        answer:"<>"
    },
    {
        title:"What does .slice do?",
        choices: ["appends new element","covers a section of an array","is a universal element","self closing tag"],
        answer:'covers a section of an array'
    },
    {
        title:"What is the first thing you do to debug?",
        choices: ["CSS","HTML","console.log","git bash"],
        answer:"console.log"
    }
];


var startButton = document.getElementById('start');
var questionContainerElement = document.querySelector(".container");
var startScreen = document.getElementById('start-screen');
var questionsText = document.getElementById('question-text');
var answerButtons = document.querySelectorAll('#choices .btn');
var currentQuestionIndex = 0;

let score = 0;

startButton.addEventListener('click',beginGame)

function beginGame() {
    console.log('Started');

    startScreen.classList.add('hide');
    questionContainerElement.classList.remove('hide');
    showQuestion();
};

console.log(Questions[currentQuestionIndex])

function showQuestion() {
    questionsText.textContent =Questions[currentQuestionIndex].title;
    
}
