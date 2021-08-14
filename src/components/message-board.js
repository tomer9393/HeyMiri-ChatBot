import { LitElement, html, css, svg } from './base.js';
import { MessageBox } from './message-box';
import { UserMessage } from './user-message';
import { emitMessage } from '../api/socket';
import { myUserContext } from '../api/context';
import { getContext } from '../api/socket';
import { sharedStyles } from './shared-styles';

// MessageBoard component displays the message list and the message box.
export class MessageBoard extends LitElement {
  static get properties() {
    return {
      myUser: { type: Object }, // defines if message is from me or other user.
      messageHistory: { type: Array }, // holds all the messages we get from socket.
      reply: { type: Object }, // defines if a user clicked on reply button and pass it to the message box.
      chatOpen: { type: String } // prop form main-chat. defines if we chat or userlist view on mobile mode.
    };
  }

  constructor() {
    super();
    this.myUser = myUserContext.getUser();
    this.messageHistory = [];
    this.reply = undefined;

    // subscribe to observer of messages from socket and adding them to the message history.
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
            <fc-button 
            @click=${this.showUsersButton}
            class="is-only-mobile showUsers-button"
            ></fc-button>
            <div class="common-header-content">
              <h2 class="common-header-title">I'm Like 'Siri' But I Don't Want To Help You...</h2>
            </div>
          </button>       
        </div>
          <fc-button 
          @click=${this.leaveChat}
          class="leave-chat is-only-desktop"
          >Leave Chat</fc-button>
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
      <message-box 
      @chatReply="${this.userAnswered}" 
      .reply="${this.reply}"
      ></message-box>   
      </div>
    `;
  }

  // on mobile view. if clicked, changing the view to userlist and dispaching event to the listener in main-chat to know about the update.
  showUsersButton() {
    this.chatOpen = '';
    this.dispatchEvent(new CustomEvent('showUsers', { detail: '' }));
  }

  //handler for event listener if a user clicked on reply button and pass it to message-box.
  userReply(event) {
    this.reply = event.detail;
  }

  //handler for event listener if a user sent a message connected to reply and set the reply to empty again.
  userAnswered(event) {
    this.reply = event.detail;
  }

  //on each message sent, wait until the update finished and then scroll to the bottom of message list.
  updated() {
    this.updateComplete.then(() => {
      const chatMessages = this.shadowRoot.querySelector('.messanger');
      chatMessages.scrollTop = chatMessages.scrollHeight;
    });
  }

  //leave chat reloads the page.
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
