const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const failPopup = document.getElementById('popup-fail')
const successPopup = document.getElementById('popup-success')
const audioInsuccess = document.getElementById('audioInsuccess')
const audioSuccess = document.getElementById('audioSuccess')
const audioMagar = document.getElementById('audioMagar')
const audioPorcusor = document.getElementById('audioPorcusor')
const audioTigru = document.getElementById('audioTigru')
const audioCorrectAnswer = document.getElementById('audioCorrectAnswer')
const audioWrongAnswer = document.getElementById('audioWrongAnswer')
const home1 = document.getElementById('home1')
const home2 = document.getElementById('home2')
const answerButtos = document.getElementById('answer-buttons')
let score = 0;
let selected = 0;
const winnie = document.getElementById("winnie")
startButton.addEventListener('click',startGame)
nextButton.addEventListener('click',nextQuestion)
home1.addEventListener('click',goToHome)
home2.addEventListener('click',goToHome)
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
let shuffledQuestions = undefined, currentQuestIndex = undefined;
function nextQuestion() {
    currentQuestIndex++
    selected = 0
    setNextQuestion()
}
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
async function selectAnswer(e) {
    if (selected === 0) {
        selected = 1
        const selectedButton = e.target
        const correct = selectedButton.dataset.correct
        let yay = 0
        if (correct != undefined) {
            score += 1;
            yay = 1
            audioCorrectAnswer.play()
        } else {
            yay = 0
            audioWrongAnswer.play()
        }

        // answerButtos.children.prop("disabled",true);
        setStatusClass(document.body, correct)
        Array.from(answerButtonsElement.children).forEach(button => {
            setStatusClass(button, button.dataset.correct)
            button.removeEventListener("click", selectAnswer)
        })
        if (shuffledQuestions.length > currentQuestIndex + 1) {
            nextButton.classList.remove('hide')
        } else {
            // startButton.innerText = 'Restart'
            // startButton.classList.remove('hide')
            if (yay === 1)
                await new Promise(r => setTimeout(r, 6000));
            else
                await new Promise(r => setTimeout(r, 7000));
            if (score < 3) {
                audioCorrectAnswer.pause()
                audioWrongAnswer.pause()
                failPopup.style.display = 'block'
                audioInsuccess.play()
            } else {
                audioCorrectAnswer.pause()
                audioWrongAnswer.pause()
                successPopup.style.display = 'block'
                audioSuccess.play()
                localStorage.setItem("joc2", "1");
            }

        }
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
    //answerButtos.children.prop("disabled",false);
    questionElement.innerText = question.question
    question.audio.play()
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

function blockAnswerButtons(){
    var answers = document.getElementsByClassName('btn-answer');
    var numAnswers = answers.length;
    for (var i = 0; i < numAnswers; i++) {
        answers[i].removeEventListener('click', selectAnswer, false);
    }
}
function resetState(){
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while(answerButtonsElement.firstChild){
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function goToHome() {
    let locationString = location.pathname;
    location.href = locationString.replace("/Game2/game2.html", "/home.html");
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
        ],
        audio: audioPorcusor
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
        ],
        audio: audioTigru
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
        ],
        audio: audioMagar
    }
]