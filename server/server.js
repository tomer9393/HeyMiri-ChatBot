const path = require('path');
const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const { formatMessage } = require('./utils/messages');
const {
  userJoin,
  getCurrentUser,
  userLeave,
  getUsers
} = require('./utils/users');
const { botMessages, formatQuestion } = require('./utils/helpers');
// const  googleIt = require('google-it')
var stringSimilarity = require('string-similarity');

// var elasticsearch = require('elasticsearch');
// var client = new elasticsearch.Client({
//   host: 'localhost:9200'
// });

const app = express();
const server = http.createServer(app);
const io = socketio(server, { cors: { origin: '*' } });

const questionsArr = ['null'];
const answersArr = ['null'];

// ChatBot
const botUser = { id: 0, username: 'Miri Pascal', avatar: 'images/miri/2.jpg' };

// Set static folder
app.use(express.static('../'));
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

// Run when client connects
io.on('connection', (socket) => {
  socket.on('joinChat', ({ id, name, avatar }) => {
    const user = userJoin(socket.id, id, name, avatar);

    // Welcome current user
    socket.emit(
      'message',
      formatMessage(
        botUser.username,
        "Welcome to Hey Miri! Ask me whatever you want to know... Maybe I'll answer and maybe not...",
        botUser.id,
        botUser.avatar,
        undefined
      )
    );

    // Broadcast when a user connects
    socket.broadcast.emit(
      'message',
      formatMessage(
        botUser.username,
        `${user.username} has joined...` + botMessages('joined'),
        botUser.id,
        botUser.avatar,
        undefined
      )
    );

    // Send users and chat info
    io.emit('chatUsers', { users: getUsers() });
  });

  // Listen for chatMessage
  socket.on('chatMessage', (msg) => {
    const user = getCurrentUser(socket.id);
    io.emit(
      'message',
      formatMessage(user.username, msg, user.id, user.avatar, undefined)
    );

    if (msg.includes('?')) {
      let question = formatQuestion(msg);

      if (question.length == 0) {
        return;
      }

      let [answer, bool] = checkAnswerExist(question);

      if (answer) {
        io.emit(
          'message',
          formatMessage(
            botUser.username,
            botMessages('answer') + answer,
            botUser.id,
            botUser.avatar,
            formatMessage(user.username, msg, user.id, user.avatar, undefined)
          )
        );
      } else if (!bool) {
        questionsArr.push(question);
        answersArr.push(question);
      }
    }
  });

  // Listen for chatMessage replys
  socket.on('chatReply', (msgReply, question) => {
    const user = getCurrentUser(socket.id);
    io.emit(
      'message',
      formatMessage(user.username, msgReply, user.id, user.avatar, question)
    );

    let index = questionsArr.indexOf(formatQuestion(question.text));
    if (!msgReply.includes('?')) {
      if (index != -1 && questionsArr[index] == answersArr[index]) {
        answersArr[index] = msgReply;
      }
    }
  });

  // Runs when client disconnects
  socket.on('disconnect', () => {
    const user = userLeave(socket.id);

    if (user) {
      io.emit(
        'message',
        formatMessage(
          botUser.username,
          `${user.username} ` + botMessages('left'),
          botUser.id,
          botUser.avatar,
          undefined
        )
      );

      // Send users and chat info
      io.emit('chatUsers', { users: getUsers() });
    }
  });
});

function checkAnswerExist(question) {
  let results = stringSimilarity.findBestMatch(question, questionsArr);

  if (results.bestMatch.rating >= 0.8) {
    let index = results.bestMatchIndex;
    if (questionsArr[index] != answersArr[index]) {
      return [answersArr[index], null];
    } else {
      return [null, true];
    }
  } else {
    return [null, null];
  }
}

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
