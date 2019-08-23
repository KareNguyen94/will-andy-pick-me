var textBox = document.querySelector(".question-textbox");
var answerButton = document.getElementById("answer-button");
var answerText = document.getElementById("answers");
var questionTe =  document.getElementById("question");


    //
    // answerButton.addEventListener("click", function() {
    //   textBox.innerText = question.value;

      function addQuestion(question) {
        var questionText = document.getElementById("question");
        questionText.innerText = question;
      }

      answerButton.addEventListener("click", function() {
        var textBox = document.querySelector(".question-textbox");
        addQuestion(textBox.value);
        textBox.value = "";

      function response() {
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
                        "Very doubtful."
                      ];
              response(answerArr) {
              for (var i = 0; i < answerArr.length; i++) {
              this.answes.push(answerArr[i])
        }

      document.getElementById("answers").innerText = answers[]


      });

});
