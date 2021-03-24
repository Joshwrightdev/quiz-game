var score = 0;
var mainContainer = document.querySelector("#main-container");
var questionsEl = document.querySelector("#questions");
var choicesEl = document.querySelector("#choices");
var timerStart = document.querySelector("#Start-Button");
var highScores = document.querySelector("#high-scores");
var secondsLeft = 30;
var startCount;
var submitHighScore = document.querySelector("#submit-button")
var timeCurrently = document.querySelector("#timerStart-count");
var newChoices = document.createElement("ul");
var answerResponse = document.createElement("h1");
var questionIndex = 0;

var questionList = [
  {
    question: "The background noise present in a scene or recording location:",
    choices: ["a", "Ambient Audio", "c", "d"],
    answer: "Ambient Audio",
  },
  {
    question: "The name of a device which reduces signal:",
    choices: ["a", "Attenuator", "c", "d"],
    answer: "Attenuator",
  },
  {
    question: "The pathway along which an electrical signal flows:",
    choices: ["Bus", "B", "C", "D"],
    answer: "Bus",
  },
  {
    question:
      "This is the term for the Logarithmic measurement of signal strength:",
    choices: ["A", "Decibel", "C", "D"],
    answer: "Decibel",
  },
  {
    question:
      "The process of adjusting various audio frequencies to correct or enhance the sound:",
    choices: ["A", "B", " C", "Equalization"],
    answer: "Equalization",
  },
  {
    question: "The amplification level of an audio signal:",
    choices: ["A", "B", "gain", "D"],
    answer: "gain",
  },
  {
    question: "A unit of frequency measured in cycles per second:",
    choices: ["A", " B", "hertz", "D"],
    answer: "hertz",
  },
  {
    question:
      "What is the standard of communication between musical instruments, controllers and computers:",
    choices: ["MIDI", "B", "C", "D"],
    answer: "MIDI",
  },
  {
    question:
      "In digital audio recording, thousands of individual _____ are recorded every second:",
    choices: ["A", "samples", "B", "D"],
    answer: "samples",
  },
  {
    question:
      "A DC current which is sent through audio cables to provide power for devices such as microphones:",
    choices: ["A", "B", "Phantom Power", "D log"],
    answer: "Phantom Power",
  },
];

function render(questionIndex) {
  questionsEl.innerHTML = "";
  newChoices.innerHTML = "";
  for (var i = 0; i < questionList.length; i++) {
    var userQuestion = questionList[questionIndex].question;
    questionsEl.textContent = userQuestion;
    var userChoices = questionList[questionIndex].choices;
  }
  userChoices.forEach(function (choiceIndex) {
    var listItem = document.createElement("li");
    listItem.textContent = choiceIndex;
    questionsEl.appendChild(newChoices);
    newChoices.appendChild(listItem);
    listItem.addEventListener("click", compareChoices);
  });
}

timerStart.addEventListener("click", function () {
  startCount = setInterval(function () {
    secondsLeft--;
    timeCurrently.textContent = "Time: " + secondsLeft;

    if (secondsLeft <= 0) {
      clearInterval(startCount);
      currentTime.textContent = "Time's up!";
    }

    if (questionIndex === 7) {
      questionsEl.innerHTML = "";
      newChoices.innerHTML = "";
      secondsLeft.innerHTML = "";
      clearInterval(startCount);
      highScores.textContent = secondsLeft;
      submitScore();
    }
  }, 1000);

  render(questionIndex);
});

function compareChoices(event) {
  var userInput = event.target;

  if (userInput.matches("li")) {
    answerResponse.setAttribute("id", "answerResponse");

    if (userInput.textContent == questionList[questionIndex].answer) {
      answerResponse.textContent =
        "Correct! The answer is:  " + questionList[questionIndex].answer;
    } else {
      answerResponse.textContent =
        "Wrong! The correct answer is:  " + questionList[questionIndex].answer;
    }
    questionIndex++;
    render(questionIndex);
    questionsEl.appendChild(answerResponse);
  }
}

function submitScore() {
  startCount.innerHTML = "";
  timerStart.innerHTML = "";
  var userInitials = document.createElement("input");
  userInitials.setAttribute("type", "text");
  userInitials.setAttribute("id", "initials");
  userInitials.textContent = "";
  mainContainer.appendChild(userInitials);
  submitButton();
}

function submitButton() {
  var submitMyNewScore = document.createElement("button");
  submitMyNewScore.setAttribute("type", "submit");
  submitMyNewScore.setAttribute("id", "Submit");
  submitMyNewScore.textContent = "Submit High Score of: " + secondsLeft;

  submitHighScore.appendChild(submitMyNewScore);
}

submitMyNewScore.addEventListener("click", function () {
  var initials = submitMyNewScore.value;
  {
    var finalScore = {
      initials: initials,
      score: secondsLeft,
    };
    var scoreLog = localStorage.getItem("scoreLog");
    if (scoreLog === null) {
      scoreLog = [];
    } else {
      scoreLog = JSON.parse(scoreLog);
    }
    scoreLog.push(finalScore);
    var newScore = JSON.stringify(scoreLog);
    localStorage.setItem("scoreLog", newScore);
  }

});
