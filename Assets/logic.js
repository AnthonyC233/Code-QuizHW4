var startButton = document.getElementById('start-btn')


let score = 0;

startButton.addEventListener('click',beginGame)

function beginGame() {
    console.log('Started')
    startButton.classList.add('hide')
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    showQuestion(Questions[0].Questions)
}

