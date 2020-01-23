import 'normalize.css';
import './quiz.scss';

let singleQuestions = [];
let score = 0;

// Create the quiz block
class Quiz {
  constructor(questionname, questions, scores){
    this.questionname = questionname;
    this.questions = questions;
    this.scores = scores;
  }
  makeQuestions() {
    this.questions.forEach((item, index) => {
      let singleQuestion = {};
      singleQuestion.question = item;
      singleQuestion.score = this.scores[index];
      singleQuestions.push(singleQuestion);
    });
  }
  insertQuestions(questionsArray) {
    let quizBlock = document.getElementById('quiz__item');
    questionsArray.forEach((item) => {
      const quizElement = document.createElement('p');
      const quizScoreElement = document.createElement('input');
      quizScoreElement.setAttribute('type', 'radio');
      quizScoreElement.setAttribute('data-score', item.score);
      const quizElementText = document.createTextNode(item.question);
      quizElement.appendChild(quizElementText);
      quizElement.appendChild(quizScoreElement);
      quizBlock.appendChild(quizElement);
    });
  }
}


let questions1 = new Quiz('test', ['1', '2', '3s'], [100, 200, 300]);

questions1.makeQuestions();
questions1.insertQuestions(singleQuestions);