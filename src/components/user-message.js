import { LitElement, html, css, svg } from './base.js';
import { myUserContext } from '../api/context';
import { sharedStyles } from './shared-styles';

// UserMessage component displays the messages of myUser, bot, and other users.
export class UserMessage extends LitElement {
  static get properties() {
    return {
      myUser: { type: Object },
      message: { type: Object },
      answerReply: { type: Object },
      replyButton: { type: Object },
      botAnswer: { type: String }
    };
  }

  constructor() {
    super();
    this.myUser = myUserContext.getUser();
    this.answerReply = undefined;
    this.replyButton = undefined;
    this.botAnswer = undefined;
  }

  static get styles() {
    return sharedStyles;
  }

  render() {
    // checks if its a reply, so that it will show in the message.
    // also checks if its from the bot. if so it will bold the answer text.
    if (this.message.reply) {
      this.answerReply = this.message.reply;
      if (this.message.id == 0) {
        let index = this.message.text.indexOf('The answer is:');
        this.botAnswer = this.message.text.substring(index + 14);
        this.message.text = this.message.text.substring(0, index + 14);
      }
    }

    return html` ${this.myUser != null && this.message.id == this.myUser.id
      ? html`
          <li class="common-message is-you swing-in-right-fwd">
            ${this.answerReply
              ? html`
                  <div class="reply-message-is-you">
                    <div class="reply-message-is-you reply-message">
                      <span></span>
                      <div class="reply-message-content">
                        <div
                          class="common-message-user user${this.answerReply
                            .avatar[15]}"
                        >
                          <p>${this.answerReply.username}</p>
                        </div>
                        <div class="reply-content">
                          <p class="common-message-content">
                            ${this.answerReply.text}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                `
              : ''}
            <p class="common-message-content">${this.message.text}</p>
            <time>${this.message.time}</time>
          </li>
        `
      : html` ${this.message.id == 0
          ? html` <div class="msg-wrapper swing-in-left-fwd">
              <img class="profile-image" src="images/miri/2.jpg" />
              <li class="common-message bot">
                <div class="common-message-user user">
                  <p>Miri Pascal</p>
                </div>
                ${this.answerReply
                  ? html`
                      <div class="reply-message-other">
                        <div class="reply-message-other reply-message">
                          <span></span>
                          <div class="reply-message-content-other">
                            <div class="common-reply-content">
                              <div
                                class="common-message-user user${this
                                  .answerReply.avatar[15]}"
                              >
                                <p style="margin-left: 0px;">
                                  ${this.answerReply.username}
                                </p>
                              </div>
                              <div class="reply-content">
                                <p style="margin-left: 0px;">
                                  ${this.answerReply.text}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    `
                  : ''}
                <p class="common-message-content">${this.message.text}</p>
                <p class="common-message-content" style="font-weight: bold;">
                  ${this.botAnswer}
                </p>
                <time>${this.message.time}</time>
              </li>
            </div>`
          : html` <div class="msg-wrapper swing-in-left-fwd">
              <img class="profile-image" src=${this.message.avatar} />
              <li class="common-message">
                <div class="common-message-user user${this.message.avatar[15]}">
                  <p>${this.message.username}</p>
                </div>
                ${this.answerReply
                  ? html`
                      <div class="reply-message-other">
                        <div class="reply-message-other reply-message">
                          <span></span>
                          <div class="reply-message-content-other">
                            <div class="common-reply-content">
                              <div
                                class="common-message-user user${this
                                  .answerReply.avatar[15]}"
                              >
                                <p style="margin-left: 0px;">
                                  ${this.answerReply.username}
                                </p>
                              </div>
                              <div class="reply-content">
                                <p style="margin-left: 0px;">
                                  ${this.answerReply.text}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    `
                  : ''}
                <p class="common-message-content">${this.message.text}</p>
                <div class="reply-wrapper">
                  <time>${this.message.time}</time>
                  ${this.message.text.includes('?')
                    ? html`
                        <fc-button
                          @click=${() => this.replyClick(this.message)}
                          class="reply-button"
                          id="reply-message"
                          >↩</fc-button
                        >
                      `
                    : ''}
                </div>
              </li>
            </div>`}`}`;
  }

  // if a user clicked the reply button, dispaching an event back to message board with the message so it will apper in the message box.
  // when clicked again the reply is cancelled.
  replyClick(message) {
    if (!this.replyButton) {
      this.replyButton = message;
      this.dispatchEvent(new CustomEvent('userReply', { detail: message }));
    } else {
      this.replyButton = undefined;
      this.dispatchEvent(new CustomEvent('userReply', { detail: undefined }));
    }
  }
}

customElements.define('user-message', UserMessage);
