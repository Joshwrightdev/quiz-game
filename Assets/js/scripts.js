var score = 0;
var questionListIndex = 0;
var nextQuestion = document.querySelector("#Questions");
var nextChoices = document.querySelector("#Choices");

var questions = [
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
