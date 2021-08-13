import { LitElement, html, css, svg } from './base.js';
import { myUserContext } from '../api/context';
import { getContext } from '../api/socket';
import { sharedStyles } from './shared-styles';

export class UserList extends LitElement {
  static get properties() {
    return {
      userList: { type: Array },
      myUser: { type: Object },
      youTag: { type: String }
    };
  }

  constructor() {
    super();
    this.userList = [];
    this.myUser = myUserContext.getUser();
    getContext.getUserList().subscribe((user) => {
      this.userList = user;
    });
    this.youTag = '';
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
