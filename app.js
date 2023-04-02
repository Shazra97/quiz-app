var quiz = [

    {
        question: "1.what is binary number?",
        answer: "a",
        option: [
            'a',
            'b',
            'c',
            'd'
        ]
    },
    {
        question: "2.HTML stand for?",
        answer: "b",
        option: [
            'a',
            'b',
            'c',
            'd'
        ]
    },
    {
        question: "3.CSS stand for?",
        answer: "c",
        option: [
            'a',
            'b',
            'c',
            'd'
        ]
    },
    {
        question: "4.JS stand for?",
        answer: "d",
        option: [
            'a',
            'b',
            'c',
            'd'
        ]
    },
    {
        question: "5.what is Linux?",
        answer: "a",
        option: [
            'a',
            'b',
            'c',
            'd'
        ]
    },
    {
        question: "6.OS stand for?",
        answer: "c",
        option: [
            'a',
            'b',
            'c',
            'd'
        ]
    },
    {
        question: "7.what is 0,1?",
        answer: "d",
        option: [
            'a',
            'b',
            'c',
            'd'
        ]
    },
    {
        question: "8.How many computer language?",
        answer: "c",
        option: [
            'a',
            'b',
            'c',
            'd'
        ]
    },
    {
        question: "9.what is High level Language?",
        answer: "c",
        option: [
            'a',
            'b',
            'c',
            'd'
        ]
    },
    {
        question: "10.what is Low level language?",
        answer: "b",
        option: [
            'a',
            'b',
            'c',
            'd'
        ]
    }
];

function showQuiz(e) {
    const ques = document.getElementById('ques');
    ques.innerHTML = quiz[e].question;
    var choice = document.getElementsByClassName('choice')
    for (var i=0; i < quiz.length ; i++){
        choice[i].innerHTML = quiz[e].option[i];
    }
}

var score = 0;
function savebtn(){
    removeActiveClass();
    score++;
    showQuiz(score);
}

function activeOption(e){
    removeActiveClass();
    e.classList.add('active')
}

function removeActiveClass(){
    var activeClass = document.getElementsByClassName('active');
    for (var i=0; i< activeClass.length ; i++){
        activeClass[i].classList.remove('active');
    }
}