const users = [];

// Join user to chat
function userJoin(socket, id, username, avatar) {
  const user = { socket, id, username, avatar };

  users.push(user);

  return user;
}

// Get current user
function getCurrentUser(socket) {
  return users.find((user) => user.socket === socket);
}

// User leaves chat
function userLeave(socket) {
  const index = users.findIndex((user) => user.socket === socket);

  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
}

// Get chat users
function getUsers() {
  return users;
}

module.exports = {
  userJoin,
  getCurrentUser,
  userLeave,
  getUsers
};
