export const state = {
  data: {},
  subject: {},
  question: 0,
  score: 0,
};

const getJSON = async function (url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    if (!response.ok) throw new Error('Error');
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const loadData = async function () {
  try {
    const data = await getJSON('./data.json');
    state.data = data.quizzes;
  } catch (error) {
    console.error(error);
  }
};

export const updateSubject = function (subjectNumber) {
  state.subject = state.data[+subjectNumber];
};

export const updateQuestion = function (questionNumber) {
  state.question = +questionNumber;
};

export const updateScore = function () {
  state.score++;
};
