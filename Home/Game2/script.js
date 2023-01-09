const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const winnie = document.getElementById("winnie")
startButton.addEventListener('click',startGame)
nextButton.addEventListener('click',() =>{
    currentQuestIndex++
    setNextQuestion()
})
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
let shuffledQuestions = undefined, currentQuestIndex = undefined;

function startGame(){
console.log('Started')
    startButton.classList.add('hide')
    winnie.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestIndex = 0;
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion(){
    showQuestion(shuffledQuestions[currentQuestIndex])
}
function selectAnswer(e){
    const  selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button =>{
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestIndex + 1){
        nextButton.classList.remove('hide')
    }
    else{
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }

}

function setStatusClass(element, correct){
    clearStatusClass(element)
    if (correct){
        element.classList.add('correct')
    }
    else{
        element.classList.add('wrong')
    }
}

function clearStatusClass(element){
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

function showQuestion(question){
    resetState()
    questionElement.innerText = question.question
    question.answears.forEach(answer => {
        const button = document.createElement('img')
        button.src = answer.text
        button.classList.add('btn-answer')

        if (answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState(){
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while(answerButtonsElement.firstChild){
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

const questions = [
    {
        question: 'In noroi se tavaleste,\n' +
            'Cu porumb el se hraneste,\n' +
            'Are coada covrigel\n' +
            'Si la rat are inel',
        answears: [
            {text: 'pictures/piglet.png', correct: true},
            {text: 'pictures/bear.webp', correct: false},
            {text: 'pictures/tiger.jpg', correct: false},
            {text: 'pictures/donkey.jpg', correct: false}
        ]
    },
    {
        question: 'Este-un animal sălbatic,\n'+
        'O felină de temut,\n'+
        'Negre dungi are pe blană,\n' +
        'Şi trăieşte în savană.\n',
        answears: [
            {text: 'pictures/piglet.png', correct: false},
            {text: 'pictures/bear.webp', correct: false},
            {text: 'pictures/tiger.jpg', correct: true},
            {text: 'pictures/donkey.jpg', correct: false}
        ]
    }
    ,
    {
        question: 'Seamănă cu un căluţ,\n'+
        'De statură-i mai micuţ,\n'+
        'Şi când e-ncăpăţânat,\n'+
        'Te refuză imediat.',
        answears: [
            {text: 'pictures/piglet.png', correct: false},
            {text: 'pictures/bear.webp', correct: false},
            {text: 'pictures/tiger.jpg', correct: false},
            {text: 'pictures/donkey.jpg', correct: true}
        ]
    }
]