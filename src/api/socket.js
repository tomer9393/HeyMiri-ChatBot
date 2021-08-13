import { myUserContext } from './context';
import { Subject } from 'rxjs';
const socket = io('http://localhost:5000');
const UserList = new Subject();
const History = new Subject();

// User Join submit
export const emitUser = (id, name, avatar) => {
  socket.emit('joinChat', { id, name, avatar });
};

// Message submit
export const emitMessage = (msg) => {
  socket.emit('chatMessage', msg);
};

// reply submit
export const emitReply = (msgReply, question) => {
  socket.emit('chatReply', msgReply, question);
};

// Message from server
socket.on('message', (message) => {
  History.next(message);
});

// User List from server
socket.on('chatUsers', ({ users }) => {
  UserList.next(users);
});

export const getContext = {
  getUserList: () => {
    return UserList;
  },
  getHistory: () => {
    return History;
  }
};

// ++++ Old message and users output func ++++

// function outputMessage(message) {
//     const myUser = myUserContext.getUser();
//     const li = document.createElement('li');
//     li.classList.add('common-message');
//     if (myUser != null && message.id == myUser.id) {
//         li.classList.add('is-you');
//     } else {
//         const user = document.createElement('div');
//         user.classList.add('common-message-user');
//         user.classList.add('user' + message.avatar[15]);
//         const userPic = document.createElement('img');
//         userPic.classList.add('profile-image');
//         userPic.src = message.avatar;
//         const userName = document.createElement('p');
//         userName.innerText = message.username;
//         user.appendChild(userPic);
//         user.appendChild(userName);
//         li.appendChild(user);
//         if (message.id == 0) {
//             li.classList.add('bot');
//         }
//     }
//     const p = document.createElement('p');
//     p.classList.add('common-message-content');
//     p.innerText = message.text;
//     li.appendChild(p);
//     const time = document.createElement('time');
//     time.innerText = message.time;
//     li.appendChild(time);
//     if (message.text.includes('?') && message.id != myUser.id && message.id != 0) {
//         const button = document.createElement('fc-button');
//         button.classList.add('reply-button');
//         button.setAttribute('id', 'reply-message');
//         button.addEventListener("click", function () {
//             button.setAttribute('intent', 'primary');
//             // myReplyContext.setReply(message);
//             const click = new CustomEvent('reply-listener', { detail: message })
//             button.dispatchEvent(click);
//         });
//         button.innerText = '↩';
//         li.appendChild(button);
//     }
//     document.querySelector('.messanger-list').appendChild(li);
// }

// function outputUsers(users) {
//     const myUser = myUserContext.getUser();
//     const userList = document.getElementById('users-list');
//     userList.innerHTML = '';
//     users.forEach((user) => {
//         const li = document.createElement('li');
//         li.classList.add('users-item');
//         const div = document.createElement('div');
//         li.appendChild(div);
//         const h3 = document.createElement('h3');
//         h3.classList.add('users-item-title');
//         if (myUser != null && user.id == myUser.id) {
//             h3.innerText = user.username + "   ( You )";
//         } else {
//             h3.innerText = user.username;
//         }
//         li.appendChild(h3);
//         const img = document.createElement('img');
//         img.classList.add('profile-image');
//         img.src = user.avatar
//         li.appendChild(img);
//         userList.appendChild(li);
//     });
// }
