import { LitElement, html, css, svg } from './base.js';
import { emitMessage, emitReply } from '../api/socket';
import { sharedStyles } from './shared-styles';

// MessageBox component displays the message the user is sending and the reply refrence.
export class MessageBox extends LitElement {
  static get properties() {
    return {
      message: { type: String },
      reply: { type: Object }
    };
  }

  constructor() {
    super();
    this.message = '';
  }

  static get styles() {
    return sharedStyles;
  }

  render() {
    return html`
      ${this.reply
        ? html`
            <div class="message-box" id="reply-box">
              <h3>replying to:</h3>
              <h4>${this.reply.text}</h4>
            </div>
          `
        : ''}
      <div class="message-box" @keyup=${this.shortcutListener}>
        <fc-input
          type="text"
          id="message-box"
          class="text-input"
          value=${this.message}
          @change="${this.updateMessage}"
          contenteditable=""
        ></fc-input>
        <button
          id="submit-button"
          @click=${this.sendMessage}
          class="common-button"
        >
          <span class="icon">➤</span>
        </button>
      </div>
    `;
  }

  // shortcut for sending on enter key.
  shortcutListener(e) {
    if (e.key === 'Enter') {
      this.sendMessage();
    }
  }

  // listens for message user is typing.
  updateMessage(e) {
    this.message = e.target.value;
  }

  // removing spaces, checking if the message is not empty, and handel each case if its a reply or a regular message.
  sendMessage() {
    let msg = this.message.trim();
    let reply = this.reply;

    if (!msg) {
      return false;
    }

    if (reply) {
      // Emit reply to server
      emitReply(msg, reply);
      this.dispatchEvent(new CustomEvent('chatReply', { detail: undefined }));
      this.message = '';
    } else {
      // Emit message to server
      emitMessage(msg);
      this.message = '';
    }
  }
}

customElements.define('message-box', MessageBox);
