const beginBtn = document.getElementById('begin-btn')
const questionContainerElement = document.getElementById('question-cont')
const nextBtn = document.getElementById('next-btn')

beginBtn.addEventListener('click', beginGame)

function beginGame() {
    beginBtn.classList.add('hide')
    questionContainerElement.classList.remove('hide')
    shuffleQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    nextQuestion()
}

let  shuffleQuestions, currentQuestionIndex
const questionElement = document.getElementById('question')
const answerBtnElement = document.getElementById('answer-btns')

const questions = [
    {
        question: "What is the name of Harry's pet owl?",
        answers: [
            {text: 'Hendrick', correct: false},
            {text: 'Henry', correct: false},
            {text: 'Hedwig', correct: true},
            {text: 'Harold', correct: false}

        ],

        question: "Which one is not a house?",
        answers: [
            {text: 'Slytherin', correct: false},
            {text: 'Gryffindor', correct: false},
            {text: 'Powerpuff', correct: true},
            {text: 'Ravenclaw', correct: false}

        ]
    }
]




function nextQuestion() {
    resetState()
    showQuestion(shuffleQuestions[currentQuestionIndex])
}

function resetState() {
    nextBtn.classList.add('hide')
    
    while (answerBtnElement.firstChild) {
        answerBtnElement.removeChild(answerBtnElement.firstChild)
    }
}


 
function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if(answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerBtnElement.appendChild(button)
    })
}



function selectAnswer() {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerBtnElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
}

function setStatusClass(element, correct) {
    cleatStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function cleatStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}