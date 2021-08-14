import { LitElement, html, css, svg } from './base.js';
import { myUserContext } from '../api/context';
import { getContext } from '../api/socket';
import { sharedStyles } from './shared-styles';

// UserList component displays the bot and online users.
export class UserList extends LitElement {
  static get properties() {
    return {
      userList: { type: Array }, // holds the online users we get from socket.
      myUser: { type: Object }, // defines if message is from me or other user.
      youTag: { type: String } // "You" tag in the users list for my user.
    };
  }

  constructor() {
    super();
    this.userList = [];
    this.myUser = myUserContext.getUser();
    this.youTag = '';

    // subscribe to observer of users from socket and adding them to the online users.
    getContext.getUserList().subscribe((user) => {
      this.userList = user;
    });
  }

  static get styles() {
    return sharedStyles;
  }

  render() {
    return html`
      <section class="users">
        <ul id="users-list" class="users-list">
          ${this.userList.map((user) => {
            if (this.myUser != null && user.id == this.myUser.id) {
              this.youTag = ' ( You ) ';
            } else {
              this.youTag = '';
            }
            return html`
              <li class="users-item swing-in-left-fwd">
                <img class="profile-image" src=${user.avatar} />
                <h3 class="users-item-title">
                  ${user.username} ${this.youTag}
                </h3>
              </li>
            `;
          })}
        </ul>
      </section>
    `;
  }
}

customElements.define('user-list', UserList);
