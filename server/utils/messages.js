const moment = require('moment');

function formatMessage(username, text, id, avatar, reply) {
  let chatReply = undefined;

  if (reply) {
    chatReply = reply;
  }

  return {
    username,
    text,
    time: moment().format('h:mm a'),
    id,
    avatar,
    reply: chatReply
  };
}

module.exports = {
  formatMessage
};
