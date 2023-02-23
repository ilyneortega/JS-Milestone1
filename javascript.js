const beginBtn = document.getElementById('begin-btn')
const questionContainerElement = document.getElementById('question-cont')

beginBtn.addEventListener('click', beginGame)

function beginGame() {
    console.log('The game has started')
    beginBtn.classList.add('hide')
    questionContainerElement.classList.remove('hide')
    nextQuestion()
}

const question = [
    {
        question: "What is the name of Harry's pet owl?",
        answers: [
            {text: 'Hendrick', correct: false},
            {text: 'Henry', correct: false},
            {text: 'Hedwig', correct: true},
            {text: 'Harold', correct: false}

        ]
    }
]




function nextQuestion(){

}


function selectAnswer() {

}

