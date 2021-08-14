import { LitElement, html, css, svg } from './base.js';
import { myUserContext } from '../api/context';
import { emitUser } from '../api/socket';
import { sharedStyles } from './shared-styles';

// UserLogin component is a Welcome page and login for new users.
export class UserLogin extends LitElement {
  static get properties() {
    return {
      username: { type: String },
      myAvatar: { type: Object },
      avatarList: { type: Array },
      botAvatar: { type: String },
      greet: { type: Boolean }
    };
  }

  constructor() {
    super();
    this.username = 'User' + Math.floor(Math.random() * 100);
    this.myAvatar = { id: 1, path: 'images/avatars/1.jpg' };
    this.avatarList = [
      { id: 1, path: 'images/avatars/1.jpg' },
      { id: 2, path: 'images/avatars/2.jpg' },
      { id: 3, path: 'images/avatars/3.jpg' },
      { id: 4, path: 'images/avatars/4.jpg' },
      { id: 5, path: 'images/avatars/5.jpg' },
      { id: 6, path: 'images/avatars/6.jpg' },
      { id: 7, path: 'images/avatars/7.jpg' },
      { id: 8, path: 'images/avatars/8.jpg' }
    ];
    this.botAvatar = '';
    this.greet = false;
  }

  static get styles() {
    return sharedStyles;
  }

  render() {
    return html`
      ${this.greet == false
        ? html`
            <div class="join-container" @keyup="${this.shortcutListener}">
              <header class="join-header">
                <h1>Welcome To Hey Miri !</h1>
                <h2>The ChatBot That Doesn't Want To Help You !</h2>
              </header>
              <div class="user-login-bot-wrapper">
                <fc-button
                  @click=${() =>
                    this.botAvatar == ''
                      ? (this.botAvatar = '2')
                      : (this.botAvatar = '')}
                  class="user-login-bot-button"
                  aria-label="bot-avatar"
                >
                  <img
                    class="user-login-bot roll-in-left"
                    src="images/miri/miri-login${this.botAvatar}.jpg"
                    alt=""
                  />
                </fc-button>
                ${this.botAvatar == '2'
                  ? html`
                      <header class="join-header-bot">
                        <h1>This Is ME!!!</h1>
                        <h2>Choose a Different Avatar!</h2>
                      </header>
                    `
                  : ''}
              </div>
              <header class="join-header choose">
                <h2>Choose your Avatar</h2>
              </header>
              <div class="join-main">
                ${this.avatarList.map(
                  (avatar) => html`
                    <fc-avatar
                      @click="${() => this.avatarClick(avatar)}"
                      key=${avatar.id}
                      src=${avatar.path}
                      class="roll-in-left ${this.myAvatar.id == avatar.id
                        ? 'myAvatar'
                        : 'otherAvatar'}"
                    ></fc-avatar>
                  `
                )}
              </div>
              <header class="join-header choose">
                <h2>Choose your Username</h2>
              </header>
              <div class="join-main">
                <form class="join-main-form">
                  <div class="form-control" id="enterName">
                    <label for="username">Username</label>
                    <fc-input
                      id="userInput"
                      value=${this.username}
                      @change="${this.updateUser}"
                    ></fc-input>
                  </div>
                  <fc-button
                    class="join-chat-button"
                    width="large"
                    @click="${this.greetHandle}"
                    >Join Chat
                  </fc-button>
                </form>
              </div>
            </div>
          `
        : html`
            <img
              class="greeting scale-in-center"
              src="/images/miri/trilili.gif"
            />
          `}
    `;
  }

  // shortcut for completing login on enter key.
  shortcutListener(e) {
    if (e.key === 'Enter') {
      if (this.username && this.myAvatar.id != 0) {
        this.greetHandle();
      }
    }
  }

  // listens for username choosing.
  updateUser(e) {
    this.username = e.target.value;
  }

  // listens for avatar choosing.
  avatarClick(avatar) {
    this.myAvatar = avatar;
  }

  // when a user completes his login, a greeting gif will show and then trigger the user joining to the server and the chat.
  greetHandle() {
    this.greet = true;
    setTimeout(() => {
      this.joinChat();
    }, 1800);
  }

  // creating the user with his info, setting it to the context on client side, emmiting it to the server side,
  // and dispaching the login event back to the home-page to continue to the chat.
  joinChat() {
    const user = {
      id: Math.floor(Math.random() * 100000),
      name: this.username,
      avatar: this.myAvatar.path
    };
    myUserContext.setUser(user);
    emitUser(user.id, user.name, user.avatar);
    this.dispatchEvent(new CustomEvent('joinChat', { detail: user }));
  }
}

customElements.define('user-login', UserLogin);
