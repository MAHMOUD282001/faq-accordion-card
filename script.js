
let answers = document.querySelectorAll(".questions .question p:nth-of-type(2)");

let questions = document.querySelectorAll(".questions .question p:nth-of-type(1)");


for(let i = 0; i < questions.length; i++) {
    questions[i].addEventListener("click", ()=>{
        
        answers[i].classList.toggle("active");
    })
}