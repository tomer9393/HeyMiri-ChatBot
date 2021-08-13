import { LitElement, html, css, svg } from './base.js';
import { MessageBox } from './message-box';
import { UserMessage } from './user-message';
import { emitMessage } from '../api/socket';
import { myUserContext } from '../api/context';
import { getContext } from '../api/socket';
import { sharedStyles } from './shared-styles';

export class MessageBoard extends LitElement {
  static get properties() {
    return {
      myUser: { type: Object },
      messageHistory: { type: Array },
      reply: { type: Object },
      chatOpen: { type: String }
    };
  }

  constructor() {
    super();
    this.myUser = myUserContext.getUser();
    this.messageHistory = [];
    this.reply = undefined;
    getContext.getHistory().subscribe((message) => {
      this.messageHistory = [...this.messageHistory, message];
    });
  }

  static get styles() {
    return sharedStyles;
  }

  render() {
    return html`
    <div class="main-content ${this.chatOpen}">
      <header class="common-header">
        <div class="common-header-start">
            <img class="profile-image" src="images/miri/4.jpg" alt="Miri Pascal">
            <fc-button @click=${
              this.showUsersButton
            } class="is-only-mobile showUsers-button"></fc-button>
            <div class="common-header-content">
              <h2 class="common-header-title">I'm Like Hey Siri But Evil & Ugly</h2>
            </div>
          </button>       
        </div>
          <fc-button @click=${
            this.leaveChat
          } class="leave-chat is-only-desktop">Leave Chat</fc-button>
      </header>
      <div class="messanger">
        <ol id="messanger-list" class="messanger-list">
          ${this.messageHistory.map((message) => {
            return html`
              <user-message
                @userReply="${this.userReply}"
                .message="${message}"
              ></user-message>
            `;
          })}
        </ol>
      </div>
      <message-box @chatReply="${this.userAnswered}" .reply="${
      this.reply
    }"></message-box>   
      </div>
    `;
  }

  showUsersButton() {
    this.chatOpen = '';
    this.dispatchEvent(new CustomEvent('showUsers', { detail: '' }));
  }

  userReply(event) {
    this.reply = event.detail;
  }

  userAnswered(event) {
    this.reply = event.detail;
  }

  updated() {
    this.updateComplete.then(() => {
      const chatMessages = this.shadowRoot.querySelector('.messanger');
      chatMessages.scrollTop = chatMessages.scrollHeight;
    });
  }

  leaveChat() {
    location.reload();
    // const leaveChat = confirm('Are you sure you want to leave Miri???');
    // if (leaveChat) {
    //   location.reload();
    // } else {
    // }
  }
}

customElements.define('message-board', MessageBoard);
