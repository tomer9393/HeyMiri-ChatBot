var converter = require('number-to-words');

const joinedMessages = [
  'Act like you care...',
  'Trilili Tralalala!!!!',
  'Ohhhhhh another one ?!?!?! '
];
const leftMessages = [
  'has finaly left! One less to worry about...',
  "has left. You think he's dead?",
  'Not with us anymore... Who cares hahaha '
];
const answerMessages = [
  'Ohhhhh shut up allready!!! The answer is:  ',
  "I can't do this...That's it i'm killing myself...The answer is: ",
  'Nobody cares about it... The answer is: ',
  'Please stop with this question... The answer is: ',
  'You are a CHARMER You are Magic!!! The answer is: ',
  "Can't you see the answer up here?! The answer is: ",
  'Again and again and again with this question... The answer is: ',
  "I'm EXPLODING in - 10...9...8...3...1... The answer is: ",
  'AAAAAHHHHAHAHAWWWWAAWWWWW STOP!!!$#$%$%&$%@#%!@!#$!~$^^!&!^@%~@  The answer is: '
];

let operatorMap = {
  '+': 'plus',
  '-': 'minusminus',
  '/': 'divide',
  '*': 'multiply',
  '=': 'equalsequals',
  '!=': 'not-equals'
};

function botMessages(messageKind) {
  let message;
  switch (messageKind) {
    case 'joined':
      message = randomMsg(joinedMessages, 3);
      break;
    case 'left':
      message = randomMsg(leftMessages, 3);
      break;
    case 'answer':
      message = randomMsg(answerMessages, 9);
      break;
  }
  return message;
}

function randomMsg(arr, max) {
  let index = Math.floor(Math.random() * max);
  return arr[index];
}

function formatQuestion(question) {
  let subQuestion = question.replace(/\s+/g, ' ').toLowerCase().trim();
  let qIndex = subQuestion.indexOf('?');
  subQuestion = subQuestion.substring(0, qIndex);
  if (subQuestion.match(/\d+/g)) {
    let matchNums = subQuestion.match(/\d+/g);
    matchNums.forEach(
      (num) =>
        (subQuestion = subQuestion.replace(num, converter.toWords(num) + ' '))
    );
  }
  if (subQuestion.match(/\+|\-|\*|\/|\=|\!=/gi)) {
    let matchOps = question.match(/\+|\-|\*|\/|\=|\!=/gi);
    matchOps.forEach(
      (op) => (subQuestion = subQuestion.replace(op, operatorMap[op] + ' '))
    );
  }
  subQuestion = subQuestion.split(' ').sort().join('');
  return subQuestion;
}

module.exports = {
  botMessages,
  formatQuestion
};
