import { LitElement, html, css, svg } from './base.js';
import { emitMessage, emitReply } from '../api/socket';
import { sharedStyles } from './shared-styles';

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

  shortcutListener(e) {
    if (e.key === 'Enter') {
      this.sendMessage();
    }
  }

  updateMessage(e) {
    this.message = e.target.value;
  }

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
