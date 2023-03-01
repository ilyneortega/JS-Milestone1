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
            {text: 'Ravenclaw', correct: false},
            {text: 'Powerpuff', correct: true}, 
        ],

        question: "Who was Headmaster of Hogwarts after Dumbledore died?",
        answers: [
            {text: 'Snape', correct: false},
            {text: 'McGonagall', correct: true},
            {text: 'Hagrid', correct: false},
            {text: 'Lupin', correct: false},
        ],

        question: "What position does Harry play on the Gryffindor Quidditch team?",
        answers: [
            {text: 'Seeker', correct: true},
            {text: 'Keeper', correct: false},
            {text: 'Beater', correct: false},
            {text: 'Chaser', correct: false}
        ],

        question: "?",
        answers: [
            {text: 'Slytherin', correct: false},
            {text: 'Gryffindor', correct: false},
            {text: 'Powerpuff', correct: true},
            {text: 'Ravenclaw', correct: false}
        ],

        question: "How does the wizard community communicate?",
        answers: [
            {text: 'Email', correct: false},
            {text: 'Phone call', correct: false},
            {text: 'Using an owl', correct: true},
            {text: 'Mail', correct: false},
        ],

        question: "What is Hagrid's title at Hogwarts?",
        answers: [
            {text: 'Keeper of keys', correct: true},
            {text: 'Head of Slytherin', correct: false},
            {text: 'Wizard', correct: false},
            {text: 'Headmaster', correct: false}
        ],

        question: "What is Harry's wand made out of?",
        answers: [
            {text: 'Phoenix feathers', correct: false},
            {text: 'Ancient magic tree', correct: false},
            {text: 'Holly wood', correct: false},
            {text: 'Holly & Phoenix feathers', correct: true},
        ],

        question: "What is the Dursley family's address?",
        answers: [
            {text: '6 Private Drive', correct: false},
            {text: '4 Private Drive ', correct: true},
            {text: '5 Private Road', correct: false},
            {text: '3 South Lane', correct: false},
        ],

        question: "What does Hagrid bring Harry the first time they met?",
        answers: [
            {text: 'Birthday Present', correct: false},
            {text: 'Letter', correct: false},
            {text: 'Birthday Cake', correct: true},
            {text: 'Magic wand', correct: false}
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