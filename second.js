// QUIZ GAME
const quizData = [
  { question: "What is the capital of India?", answer: "delhi" },
  { question: "What is 15*13?", answer: "195" },
  { question: "What programming language runs in the browser?", answer: "javascript" },
  { question: "What programming language is used for web styling? (HTML/CSS/JS)", answer: "css"},
  { question: "Is JavaScript case-sensitive? (yes/no)", answer: "yes"}
];

function startQuiz() {
  let score = 0; 

  alert("Welcome to the JavaScript Quiz Game!");

  for (let i = 0; i < quizData.length; i++) {
    let userAnswer = prompt(quizData[i].question);

    if (userAnswer === null) {
      alert("Quiz cancelled.");
      return;
    }

    userAnswer = userAnswer.trim().toLowerCase();

    if (userAnswer === quizData[i].answer) {
      alert("Correct!");
      score++;
    } else {
      alert(`Wrong! The correct answer is "${quizData[i].answer}".`);
    }
  }
  alert(`Quiz Complete!\nYou scored ${score} out of ${quizData.length}.`);
}

startQuiz();
