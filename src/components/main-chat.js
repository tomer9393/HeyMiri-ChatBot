import { LitElement, html, css, svg } from './base.js';
import { MessageBoard } from './message-board';
import { UserList } from './user-list';
import { myUserContext } from '../api/context';
import { sharedStyles } from './shared-styles';

// MainChat component displays the message board and user list.
export class MainChat extends LitElement {
  static get properties() {
    return {
      showChat: { type: String } //showChat is for mobile view, To switch from chat to user-list.
    };
  }

  constructor() {
    super();
    this.showChat = 'chat-open';
  }

  static get styles() {
    return sharedStyles;
  }

  render() {
    return html`
      <section class="flip-in-hor-bottom main-grid">
        <aside class="main-side">
          <header class="common-header" style="padding-left: 40px;">
            <div class="common-header-users">
              <div class="common-header-content-users">
                <img class="profile-image-users" src="/images/green-dot.png" />
                <h1 class="common-header-title-users">Online Users</h1>
              </div>
              <fc-button
                @click=${this.showChatClick}
                class="showChat-button is-only-mobile"
                >Show Chat</fc-button
              >
            </div>
          </header>
          <section class="users">
            <ul class="users-list">
              <li id="chat-user-bot" class="users-item">
                <img class="profile-image" src="images/miri/2.jpg" />
                <h3 class="users-item-title">Hey Miri - ChatBot</h3>
              </li>
            </ul>
          </section>
          <hr class="rounded" />
          <user-list></user-list>
        </aside>
        <message-board
          @showUsers="${this.showUsersClick}"
          .chatOpen="${this.showChat}"
        ></message-board>
      </section>
    `;
  }

  // handler when "show chat" button is clicked, the component is updating to set the props for message-board again.
  showChatClick() {
    this.showChat = 'chat-open';
    this.performUpdate();
  }

  // handler for event listener when "show users" button was clicked inside message-board component
  showUsersClick() {
    this.showChat = '';
  }
}

customElements.define('main-chat', MainChat);
