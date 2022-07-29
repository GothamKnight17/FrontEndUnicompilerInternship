const quizDB = [
{
    question: "Q1: What  is 1+1 ?",
    a: "2",
    b: "3",
    c: "4",
    d: "5",
    ans: "ans1"
},
{
    question: "Q2: What  is 2+2 ?",
    a: "3",
    b: "4",
    c: "4",
    d: "5",
    ans: "ans3"
},
{
    question: "Q3: What  is 2+1 ?",
    a: "4",
    b: "3",
    c: "4",
    d: "5",
    ans: "ans2"
}
];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');