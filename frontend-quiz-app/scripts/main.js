import * as modal from './modal.js';

const toggleThemeBtn = document.getElementById('theme');
const sunIcon = document.querySelector('.sun-icon');
const moonIcon = document.querySelector('.moon-icon');

const subjectInfo = document.querySelector('.subject-info');
const subjectIcons = document.querySelectorAll('.subject-icon');
const subjectNames = document.querySelectorAll('.subject-name');

const subjectsList = document.querySelector('.menu__subjects');
const sections = document.querySelectorAll('.menu, .quiz, .result');
const quiz = document.querySelector('.quiz');
const menu = document.querySelector('.menu');
const result = document.querySelector('.result');

const questionContent = document.querySelector('.question__title');
const questionCurrent = document.querySelector('.question__current');
const questionMax = document.querySelector('.question__last');
const questionProgress = document.querySelector('.question__progress');
const answersContainer = document.querySelector('.answer');

const resultScore = document.querySelector('.result__score');
const resultScoreMax = document.querySelector('.result__score-max');
const playBtn = document.getElementById('play');

const toggleTheme = function () {
  if (this.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    sunIcon.src = './assets/images/icon-sun-light.svg';
    moonIcon.src = './assets/images/icon-moon-light.svg';
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    sunIcon.src = './assets/images/icon-sun-dark.svg';
    moonIcon.src = './assets/images/icon-moon-dark.svg';
  }
};

const themeInit = function () {
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    toggleThemeBtn.checked = true;
    toggleTheme.call(toggleThemeBtn);
  }
};

const animateQuestion = function (handler) {
  quiz.classList.add('hide');
  setTimeout(() => {
    handler();
    quiz.classList.remove('hide');
  }, '500');
};

const reset = function () {
  quiz.setAttribute('data-question', `0`);
  modal.state.score = 0;
  modal.updateSubject(quiz.dataset.subject);
  modal.updateQuestion(quiz.dataset.question);
};

const displayMenu = async function () {
  await modal.loadData();

  modal.state.data.forEach((subject, i) => {
    const markup = ` 
      <button class="menu__subject" data-subject="${i}">
        <img
        class="subject-icon ${subject.title.toLowerCase()}"
        src="${subject.icon}"
        alt="Subject ${subject.title} icon"
        />
        <p class="subject-name">${subject.title}</p>
      </button>
    `;
    subjectsList.insertAdjacentHTML('beforeend', markup);
  });
  renderSection(menu);
};

const displayQuiz = function (e) {
  const subject = e.target.closest('.menu__subject');
  if (!subject) return;
  quiz.setAttribute('data-subject', `${subject.dataset.subject}`);
  reset();
  renderQuestion();
  questionMax.innerHTML = modal.state.subject.questions.length;
  questionProgress.max = modal.state.subject.questions.length;
  renderSubjectInfo();
  renderSection(quiz);
};

const displayResult = function () {
  resultScore.innerHTML = modal.state.score;
  resultScoreMax.innerHTML = modal.state.subject.questions.length;

  renderSection(result);

  playBtn.addEventListener('click', function () {
    renderSection(menu);
    subjectIcons.forEach(icon => {
      icon.src = '';
      icon.classList.remove(`${modal.state.subject.title}`.toLowerCase());
    });
    subjectNames.forEach(name => (name.textContent = ''));
    subjectInfo.classList.add('visually-hidden');
  });
};

const renderSubjectInfo = function () {
  subjectIcons.forEach(icon => {
    icon.src = `${modal.state.subject.icon}`;
    icon.classList.add(`${modal.state.subject.title}`.toLowerCase());
  });
  subjectNames.forEach(
    name => (name.textContent = `${modal.state.subject.title}`)
  );
  subjectInfo.classList.remove('visually-hidden');
};

const renderSection = function (sectionToRender) {
  sections.forEach(section => {
    section === sectionToRender
      ? section.classList.remove('hidden')
      : section.classList.add('hidden');
  });
};

const renderQuestion = function () {
  const question = modal.state.subject.questions[modal.state.question];

  answersContainer.innerHTML = '';
  questionContent.textContent = question.question;
  questionCurrent.innerHTML = modal.state.question + 1;
  questionProgress.value = modal.state.question;

  const markup = `           
    ${question.options
      .map((_, index) => {
        return `
          <button class="answer__item">
            <span class="answer__choice">${String.fromCharCode(
              65 + index
            )}</span>
            <p class="answer__content"></p>
          </button>
        `;
      })
      .join('')} 
      <button class="answer__submit btn">Submit Answer</button>
      <div class="error-message hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          fill="none"
          viewBox="0 0 40 40"
        >
          <path
            fill="#EE5454"
            d="M20 5a15 15 0 1 1 0 30 15 15 0 0 1 0-30Zm0 2.5a12.5 12.5 0 1 0 0 25 12.5 12.5 0 0 0 0-25Zm-5.402 7.415.142-.175a1.25 1.25 0 0 1 1.595-.143l.175.143L20 18.233l3.49-3.493a1.25 1.25 0 0 1 1.595-.143l.175.143a1.25 1.25 0 0 1 .142 1.595l-.142.175L21.767 20l3.493 3.49a1.25 1.25 0 0 1 .142 1.595l-.142.175a1.25 1.25 0 0 1-1.595.142l-.175-.142L20 21.767l-3.49 3.493a1.25 1.25 0 0 1-1.595.142l-.175-.142a1.25 1.25 0 0 1-.143-1.595l.143-.175L18.233 20l-3.493-3.49a1.25 1.25 0 0 1-.143-1.595Z"
          />
        </svg>
        <p>Please select an answer</p>
      </div>
  `;

  answersContainer.insertAdjacentHTML('afterbegin', markup);

  document.querySelectorAll('.answer__item').forEach((item, index) => {
    item.querySelector('.answer__content').textContent =
      question.options[index];
  });

  const submitBtn = document.querySelector('.answer__submit');
  submitBtn.addEventListener('click', confirmAnswer);
};

const renderError = function (flag = true) {
  const errorMessage = document.querySelector('.error-message');
  flag
    ? errorMessage.classList.add('hidden')
    : errorMessage.classList.remove('hidden');
};

const chooseAnswer = function (e) {
  const answer = e.target.closest('.answer__item');

  if (!answer) return;
  renderError();

  answersContainer
    .querySelectorAll('.answer__item')
    .forEach(answer => answer.classList.remove('answer--active'));
  answer.classList.add('answer--active');
};

const confirmAnswer = function () {
  const pickedAnswer = document.querySelector('.answer--active');
  this.blur();

  if (!pickedAnswer) {
    renderError(false);
    return;
  }

  checkAnswer.call(this, pickedAnswer);
};

const validateAnswer = function (pickedAnswer, correctAnswer) {
  const successMarkup = `<img class="answer__icon" alt="Correct" src="./assets/images/icon-correct.svg"/>`;
  const errorMarkup = `  <img class="answer__icon" alt="Incorret" src="./assets/images/icon-incorrect.svg"/>`;

  if (pickedAnswer === correctAnswer) {
    pickedAnswer.classList.add('correct');
    pickedAnswer.insertAdjacentHTML('beforeend', successMarkup);
    modal.updateScore();
  } else {
    pickedAnswer.classList.add('incorrect');
    pickedAnswer.insertAdjacentHTML('beforeend', errorMarkup);
    correctAnswer.insertAdjacentHTML('beforeend', successMarkup);
  }
};

const checkAnswer = function (answer) {
  const answers = document.querySelectorAll('.answer__item');
  let correctAnswer;

  answers.forEach(answer => {
    answer.classList.add('pointer-events-disabled');
    answer.setAttribute('tabindex', '-1');
    answer.classList.remove('answer--active');
    if (
      answer.querySelector('.answer__content').textContent ===
      modal.state.subject.questions[modal.state.question].answer
    ) {
      correctAnswer = answer;
    }
  });

  validateAnswer(answer, correctAnswer);
  this.textContent = 'Next Question';
  this.blur();
  this.removeEventListener('click', confirmAnswer);
  this.addEventListener('click', nextQuestion);
};

const nextQuestion = function () {
  if (modal.state.question === modal.state.subject.questions.length - 1) {
    displayResult();
    return;
  }

  quiz.dataset.question = +quiz.dataset.question + 1;
  modal.updateQuestion(quiz.dataset.question);
  animateQuestion(renderQuestion);
};

const init = function () {
  themeInit();
  displayMenu();
  toggleThemeBtn.addEventListener('change', toggleTheme);
  subjectsList.addEventListener('click', displayQuiz);
  answersContainer.addEventListener('click', chooseAnswer);
};

init();
