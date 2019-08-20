'use strict';

let totalCorrect = 0;
let currentQuestion = 0;

const STORE = [
  {
    question: 'Who created Slapsgiving ?',
    answer: '0',
    choices: ['Barney and Marshall', 'Robin and Lily', 'Ted and Barney', 'Ted and Marshall', 'Ted and Punchy'],
  },
  {
    question: 'Who was named Beercules ?',
    answer: '2',
    choices: ['Ted', 'Barney', 'Marshall', 'Lily', 'Punchy'],
  },
  {
    question: 'Who was Lilys’ doppelganger ?',
    answer: '3',
    choices: ['Mustache lily', 'Street performer lily', 'Lily the wrestler', 'Stripper lily', 'Teacher lily'],
  },
  {
    question: 'What’s Barneys job ?',
    answer: '0',
    choices: ['Please', 'Has a lot of keys', 'Stock investor', 'Lawyer', 'architect'],
  },
  {
    question: 'Whats Robin famous for in Canada ?',
    answer: '4',
    choices: ['Actress', 'Model', 'News Reporter', 'Hockey player', 'Teenage popstar'],
  },
];

$('.startButton').click(function() { // INIT QUIZ
  $('.intro').hide();
  $('.container').show();
  $('.currentStats').show();
  displayQuestion();
  showCurrentStats();
});

$('.js-form').on('submit', function() {
  event.preventDefault();
  const userPickNum = $('input[name=user-answer]:checked').val();
  const answerNum = STORE[currentQuestion].answer;
  const answer = STORE[currentQuestion].choices[answerNum];
  $('.results').show();
  if (userPickNum === STORE[currentQuestion].answer) {
    $('.results').html(`
      <h2>Congratulations</h2>
      <p>Omg! You are a How I Met Your Mother Legend!!</p>
      <p>The answer is ${answer}.</p>
      <button class="nextButton">Next</button>
    `);
    totalCorrect++;
  } else {
    $('.results').html(`
      <h2>Incorrect</h2>
      <p>The correct answer is ${answer}.</p>
      <button class="nextButton" >Next</button>
    `);
  }
  $('.question-container').hide();
  currentQuestion++;
  $('.checkAnswerButton').hide();
});

$('.results').on('click', '.nextButton', function() {
  if (currentQuestion >= 5) {
    $('.results').hide();
    $('.container').hide();
    $('.stats').show();
    showStatsSection();
    currentQuestion = 0;
    totalCorrect = 0;
  } else {
    $('.container').show();
    $('.results').hide();
    displayQuestion();
    showCurrentStats();
  }
});

function displayQuestion() {
  $('.question-container').show();
  let answers = '';
  for (let i = 0; i < 5; i++) {
    answers += `
      <div class="button">
        <input type="radio" class="answerInput" name="user-answer" id="user-answer" value="${i}" aria-label="radioButton" required>${STORE[currentQuestion].choices[i]}
      </div>
    `;
  }
  
  $('.question-container').html(`
    <div class="questionDiv">
      <h3>${STORE[currentQuestion].question}</h3>
    </div>
      <div class="answersDiv">
          ${answers}      
      </div>
      <div class="checkAnswerButton">
      <button type="submit" class="checkAnswer" >Submit</button></div>
    </div>
  `);
}

$('.stats').on('click', '.restart-button', function(event) {
  currentQuestion = 0;
  totalCorrect = 0;
  location.reload();
});


function showCurrentStats() {
  let totalIncorrect = (currentQuestion) - totalCorrect;
  $('.currentStats').html(`
    <h2>Question ${currentQuestion + 1} of 5 <br>${totalCorrect} Correct   / ${totalIncorrect}  Incorrect</h2>
  `);
}

function showStatsSection() {
  $('.curentStats').hide();
  $('.stats').html(`
    <h2> Here's how you did</h2>
    <h2>${totalCorrect} correct out of 5 questions</h2>
    <h3>Points Earned ${totalCorrect}</h3>
    <button class="restart-button">Restart the Quiz</button>
  `);
}


$(function() { // Document.ready
  $('.intro').show();
});