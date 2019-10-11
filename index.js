var questionInput = document.querySelector(".question-textbox");
var answerButton = document.getElementById("answer-button");
var clearButton = document.getElementById("clear-button");
var eightBall = document.querySelector(".eight-ball");
var givenAnswer = document.getElementById("answer");
var form = document.querySelector("form");
var usersQuestion = document.getElementById("question");
var answers = ["It is certain.",
               "It is decidedly so.",
               "Without a doubt.",
               "Yes - definitely.",
               "You may rely on it.",
               "As I see it, yes.",
               "Most likely.",
               "Outlook good.",
               "Yes.",
               "Signs point to yes.",
               "Reply hazy, try again.",
               "Ask again later.",
               "Better not tell you now.",
               "Cannot predict now.",
               "Concentrate and ask again.",
               "Don't count on it.",
               "My reply is no.",
               "My sources say no.",
               "Outlook not so good.",
               "Very doubtful.",
              ];

answerButton.addEventListener("click", onAnswerButtonClick);
clearButton.addEventListener("click", clearInputs);
questionInput.addEventListener("keydown", requireInput);

function onAnswerButtonClick() {
  hideEightBall();
  showQuestion();
  showAnswer();
  styleClearButton()
}

function requireInput() {
  questionInput.value === "";
}

function hideEightBall() {
  eightBall.classList.add("hidden");
}

function showQuestion() {
   usersQuestion.innerText = (`"${questionInput.value}"`);
   form.reset();
}

function showAnswer() {
   var randomAnswer = answers[Math.floor(Math.random() * words.length)];
    givenAnswer.innerText = answers.value;
}

function styleClearButton() {
  clearButton.style.backgroundColor = "#FF0000";
}

function clearInputs() {
  usersQuestion.classList.add("hidden");
  givenAnswer.classList.add("hidden");
  eightBall.classList.remove("hidden");
}
