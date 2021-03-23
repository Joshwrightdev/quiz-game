var questionIndex = 0;
var score = 0;
var questionsEl = document.querySelector("#questions");
var choicesEl = document.querySelector("#choices");
var timerStart = document.querySelector("#Start-Button");
var highScores = document.querySelector("#high-scores");
var secondsLeft = 30;
var timer = 0;
var timeCurrently = document.querySelector("#timerStart-count");
var newChoices = document.createElement("ul");

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
  }

  var userChoices = questionList[questionIndex].choices;

  userChoices.forEach(function (newItem) {
    var listItem = document.createElement("li");
    listItem.textContent = newItem;
    questionsEl.appendChild(newChoices);
    newChoices.appendChild(listItem);
    listItem.addEventListener("click", compareChoices);
  });
}

timerStart.addEventListener("click", function () {
  if (timer === 0) {
    timer = setInterval(function () {
      secondsLeft--;
      timeCurrently.textContent = "Time: " + secondsLeft;

      if (secondsLeft <= 0) {
        clearInterval(timer);
        timeCurrently.textContent = "Time's up!";
      }
    }, 1000);
  }
  render(questionIndex);
});

function compareChoices(event) {
  var element = event.target;

  if (element.matches("li")) {
    var answerResponse = document.createElement("h1");
    answerResponse.setAttribute("id", "answerResponse");
    // Correct condition
    if (element.textContent == questionList[questionIndex].answer) {
      score++;
      answerResponse.textContent = "Correct!";
      // Correct condition
    } else {
      // Will deduct -5 seconds off secondsLeft for wrong answers
      answerResponse.textContent =
        "Wrong! The correct answer is:  " + questionList[questionIndex].answer;
      questionsEl.appendChild(answerResponse);
    }
  }
  questionIndex++;

// if (questionList.length < )



  render(questionIndex);
}
