var score = 0;
var questionIndex = 0;
var questionsEl = document.querySelector("#questions");
var choicesEl = document.querySelector("#choices");
var timer = document.querySelector("#Start-Button");
var highScores = document.querySelector("#high-scores");
var secondsLeft = 30;
var holdInterval = 0;
var penalty = 10;
var timeCurrently = document.querySelector("#timer-count");
var newChoices = document.createElement("ul");

var questionList = [
  {
    question: "The background noise present in a scene or recording location:",
    choices: ["strings", "Ambient Audio", "alerts", "numbers"],
    answer: "Ambient Audio",
  },
  {
    question: "The name of a device which reduces signal:",
    choices: ["quotes", "Attenuator", "parentheses", "square brackets"],
    answer: "Attenuator",
  },
  {
    question: "The pathway along which an electrical signal flows:",
    choices: ["Bus", "other arrays", "booleans", "all of the above"],
    answer: "Bus",
  },
  {
    question:
      "This is the term for the Logarithmic measurement of signal strength:",
    choices: ["commas", "Decibel", "quotes", "parenthesis"],
    answer: "Decibel",
  },
  {
    question:
      "The process of adjusting various audio frequencies to correct or enhance the sound:",
    choices: ["Javascript", "terminal / bash", "for loops", "Equalization"],
    answer: "Equalization",
  },
  {
    question: "The amplification level of an audio signal:",
    choices: ["strings", "booleans", "gain", "numbers"],
    answer: "gain",
  },
  {
    question: "A unit of frequency measured in cycles per second:",
    choices: ["quotes", "curly brackets", "hertz", "square brackets"],
    answer: "hertz",
  },
  {
    question:
      "What is the standard of communication between musical instruments, controllers and computers:",
    choices: ["MIDI", "other arrays", "booleans", "all of the above"],
    answer: "MIDI",
  },
  {
    question:
      "In digital audio recording, thousands of individual _____ are recorded every second:",
    choices: ["commas", "samples", "quotes", "parenthesis"],
    answer: "samples",
  },
  {
    question:
      "A DC current which is sent through audio cables to provide power for devices such as microphones:",
    choices: ["Javascript", "terminal / bash", "Phantom Power", "console log"],
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
    listItem.addEventListener("click", compare);
  });
}

timer.addEventListener("click", function () {
  if (holdInterval === 0) {
    holdInterval = setInterval(function () {
      secondsLeft--;
      timeCurrently.textContent = "Time: " + secondsLeft;

      if (secondsLeft <= 0) {
        clearInterval(holdInterval);
        allDone();
        currentTime.textContent = "Time's up!";
      }
    }, 1000);
  }
  render(questionIndex);
});

function compare(event) {
  var element = event.target;

  if (element.matches("li")) {
    var createDiv = document.createElement("div");
    createDiv.setAttribute("id", "createDiv");
    // Correct condition
    if (element.textContent == questionList[questionIndex].answer) {
      score++;
      createDiv.textContent =
        "Correct! The answer is:  " + questionList[questionIndex].answer;
      // Correct condition
    } else {
      // Will deduct -5 seconds off secondsLeft for wrong answers
      secondsLeft = secondsLeft - penalty;
      createDiv.textContent =
        "Wrong! The correct answer is:  " + questionList[questionIndex].answer;
    }
  }
  // Question Index determines number question user is on
  questionIndex++;

  if (questionIndex >= questions.length) {
    // All done will append last page with user stats
    allDone();
    createDiv.textContent =
      "End of quiz!" +
      " " +
      "You got  " +
      score +
      "/" +
      questions.length +
      " Correct!";
  } else {
    render(questionIndex);
  }
  questionsEl.appendChild(createDiv);
}
