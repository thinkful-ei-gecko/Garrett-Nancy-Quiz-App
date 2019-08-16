'use strict';

//const STORE with all the questions and answers

const STORE = {// currentQuestion, currentUserAnswer, question
  currentUserAnswer: null,
  currentQuestion: 0,
  Questions: [{
    question: 'Who created Slapsgiving?',
    answer: ['Barney and Marshall', 'Robin and Lily', 'Ted and Barney', 'Ted and Marshall', 'Ted and Punchy'],
    userAnswer: null,
    correctAnswer: 0,
    result: null,
  }]
};

//function for displaying/rendering the questions and answers 
function displayQA() {
  // render the current question
  let currentQuestion = STORE.currentQuestion;
  // render question count
  $('.question-count').text(`Question ${currentQuestion} of ${STORE.Questions.length}`);
}

console.log(displayQA());

//function for checking the answers

//function to store answer

//function to "submit"

//function to get result

//function display the results

//and then move to the next question

$(function(){
  displayQA();
});