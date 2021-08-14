import { css } from 'lit-element';

// shared styles for all components.
export const sharedStyles = css`
  html,
  body,
  app-index {
    margin: 0;
    padding: 0;
    vertical-align: baseline;
    border: 0;
  }

  fc-button[size='large'] {
    --fc-button-background-color: var(--fc-secondary);
    --fc-button-item-color: white;
    --fc-button-min-height: 60px;
    --fc-button-padding: 20px;
    --fc-button-default-border-radius: 30px;
    --fc-button-color: #009688;
    font-weight: 600;
    font-size: 24px;
    line-height: 34px;
    text-decoration: none;
    border-radius: 66px;
  }

  fc-checkbox {
    --fc-checkbox-check-color: #1f75f7;

    padding-left: 15px;
    font-size: 16px;
  }

  .text-white {
    color: white;
  }

  fc-button.added,
  fc-button.done,
  fc-button.work {
    --fc-button-min-width: 120px;
    --fc-button-background-color: var(--fc-secondary);

    margin-bottom: 10px;
  }

  fc-button.added {
    --fc-button-background-color: #00ba7f;
  }

  fc-button.done {
    --fc-button-background-color: #dce3f3;
    --fc-button-item-color: #025;
  }

  fc-button.work {
    --fc-button-background-color: #00d894;
  }

  fc-button:hover {
    /* box-shadow: 0px 10px 10px rgba(0, 71, 255, 0.07), 0px 5.15px 7.12px rgba(0, 71, 255, 0.0456112), 0px 4.52px 6.02px rgba(0, 71, 255, 0.035), 0px 4.5288px 3.62304px rgba(0, 71, 255, 0.0243888); */
  }

  fc-input {
    --fc-input-height: 30px;
    --fc-input-width: 400px;
    --fc-input-background-color: white;
    /* --fc-input-background-color: #009688; */
    /* --fc-input-font-color: #009688 */
    border-radius: 30px;
    --fc-input-shadow: 0px 10px 20px var(--gray-2);
    margin: 5px 0px 15px;
  }

  /* noscript {
    display: block;
    margin: 1em;
  } */

  /** MY CHAT BOT **/

  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    vertical-align: baseline;
    border: 0;
  }
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol,
  ul {
    list-style: none;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  button {
    background-color: transparent;
    color: inherit;
    border-width: 0;
    padding: 0;
    margin: 0;
    cursor: pointer;
    text-align: inherit;
  }

  img {
    display: block;
    max-width: 100%;
  }

  /* Responsive Variables */
  @media (min-width: 768px) {
    .is-only-mobile {
      display: none !important;
    }
    .not-found-mobile {
      display: none;
    }
  }

  @media (max-width: 767px) {
    .is-only-desktop {
      display: none !important;
    }
    .not-found {
      display: flex !important;
      justify-content: center !important;
    }
    .not-found img {
      background: url(images/miri/404-mobile.jpg) no-repeat;
      position: fixed !important;
      max-width: 75vh !important;
      height: 100% !important;
    }

    .not-found-desk {
      display: none;
    }
  }

  /* Small Device = 320px */

  @media only screen and (max-width: 479px) {
    .common-header {
      padding: 8px 8px !important;
      height: 60px !important;
    }
    .profile-image {
      height: 40px !important;
    }
    .common-header-content {
      font-size: 10px !important;
      margin: 10px !important;
    }
    .common-message {
      font-size: small !important;
    }
  }

  /* Multi direcrtion Languages Support Variables*/
  /* colors */
  :root {
    --white: #fff;
    --dark-gray: #333;
    --main-gray: #ededed;
    --light-gray: #f7f7f7;
    --dark-green: #009688;
    --info-message: rgba(225, 245, 254, 0.92);
    /* blue messages */
  }

  /*mixin*/
  /*scrolls*/
  ::-webkit-scrollbar {
    width: 6px !important;
    height: 6px !important;
    background-color: #f5f5f5;
  }

  ::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.2);
  }

  ::-webkit-scrollbar-track {
    background-color: rgba(255, 255, 255, 0.08);
  }

  /* typography */
  html {
    font-size: 1px;
  }

  /* body {
    font-family: Segoe UI, Helvetica Neue, Helvetica, Lucida Grande, Arial,
      Ubuntu, Cantarell, Fira Sans, sans-serif;
    font-size: 16rem;
    line-height: 1.3;
    color: var(--dark-gray);
  } */

  /* background */
  html {
    background: linear-gradient(
      to bottom,
      var(--dark-green) 1px,
      var(--dark-green) 130px,
      #dddbd1 131px,
      #d2dbdc 100%
    );
    background-repeat: no-repeat;
    min-height: 100vh;
  }

  /* animation */
  @keyframes clickableAnimation {
    0% {
      transform: scale(1);
    }
    95% {
      transform: scale(1);
    }
    96% {
      transform: scale(1.5) rotate(-30deg);
    }
    97% {
      transform: scale(1.5) rotate(30deg);
    }
    100% {
      transform: scale(1);
    }
  }
  .u-animation-click {
    animation: clickableAnimation 20s ease-in-out -17s infinite;
  }

  .scale-in-center {
    -webkit-animation: scale-in-center 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
      both;
    animation: scale-in-center 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }

  @-webkit-keyframes scale-in-center {
    0% {
      -webkit-transform: scale(0);
      transform: scale(0);
      opacity: 1;
    }
    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
      opacity: 1;
    }
  }
  @keyframes scale-in-center {
    0% {
      -webkit-transform: scale(0);
      transform: scale(0);
      opacity: 1;
    }
    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
      opacity: 1;
    }
  }

  .swirl-in-fwd {
    -webkit-animation: swirl-in-fwd 0.6s ease-out both;
    animation: swirl-in-fwd 0.6s ease-out both;
  }

  @-webkit-keyframes swirl-in-fwd {
    0% {
      -webkit-transform: rotate(-540deg) scale(0);
      transform: rotate(-540deg) scale(0);
      opacity: 0;
    }
    100% {
      -webkit-transform: rotate(0) scale(1);
      transform: rotate(0) scale(1);
      opacity: 1;
    }
  }
  @keyframes swirl-in-fwd {
    0% {
      -webkit-transform: rotate(-540deg) scale(0);
      transform: rotate(-540deg) scale(0);
      opacity: 0;
    }
    100% {
      -webkit-transform: rotate(0) scale(1);
      transform: rotate(0) scale(1);
      opacity: 1;
    }
  }

  .roll-in-left {
    -webkit-animation: roll-in-left 0.6s ease-out 0.2s both;
    animation: roll-in-left 0.6s ease-out 0.2s both;
  }

  @-webkit-keyframes roll-in-left {
    0% {
      -webkit-transform: translateX(-800px) rotate(-540deg);
      transform: translateX(-800px) rotate(-540deg);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateX(0) rotate(0deg);
      transform: translateX(0) rotate(0deg);
      opacity: 1;
    }
  }
  @keyframes roll-in-left {
    0% {
      -webkit-transform: translateX(-800px) rotate(-540deg);
      transform: translateX(-800px) rotate(-540deg);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateX(0) rotate(0deg);
      transform: translateX(0) rotate(0deg);
      opacity: 1;
    }
  }

  .flip-in-hor-bottom {
    -webkit-animation: flip-in-hor-bottom 0.5s
      cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    animation: flip-in-hor-bottom 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }

  @-webkit-keyframes flip-in-hor-bottom {
    0% {
      -webkit-transform: rotateX(80deg);
      transform: rotateX(80deg);
      opacity: 0;
    }
    100% {
      -webkit-transform: rotateX(0);
      transform: rotateX(0);
      opacity: 1;
    }
  }
  @keyframes flip-in-hor-bottom {
    0% {
      -webkit-transform: rotateX(80deg);
      transform: rotateX(80deg);
      opacity: 0;
    }
    100% {
      -webkit-transform: rotateX(0);
      transform: rotateX(0);
      opacity: 1;
    }
  }

  .swing-in-top-fwd {
    -webkit-animation: swing-in-top-fwd 0.5s
      cubic-bezier(0.175, 0.885, 0.32, 1.275) both;
    animation: swing-in-top-fwd 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)
      both;
  }

  @-webkit-keyframes swing-in-top-fwd {
    0% {
      -webkit-transform: rotateX(-100deg);
      transform: rotateX(-100deg);
      -webkit-transform-origin: top;
      transform-origin: top;
      opacity: 0;
    }
    100% {
      -webkit-transform: rotateX(0deg);
      transform: rotateX(0deg);
      -webkit-transform-origin: top;
      transform-origin: top;
      opacity: 1;
    }
  }
  @keyframes swing-in-top-fwd {
    0% {
      -webkit-transform: rotateX(-100deg);
      transform: rotateX(-100deg);
      -webkit-transform-origin: top;
      transform-origin: top;
      opacity: 0;
    }
    100% {
      -webkit-transform: rotateX(0deg);
      transform: rotateX(0deg);
      -webkit-transform-origin: top;
      transform-origin: top;
      opacity: 1;
    }
  }

  .slide-left {
    -webkit-animation: slide-left 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)
      reverse both;
    animation: slide-left 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) reverse both;
  }

  @-webkit-keyframes slide-left {
    0% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
    }
    100% {
      -webkit-transform: translateX(-100px);
      transform: translateX(-100px);
    }
  }
  @keyframes slide-left {
    0% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
    }
    100% {
      -webkit-transform: translateX(-100px);
      transform: translateX(-100px);
    }
  }

  .slide-right {
    -webkit-animation: slide-right 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)
      reverse both;
    animation: slide-right 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) reverse
      both;
  }

  @-webkit-keyframes slide-right {
    0% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
    }
    100% {
      -webkit-transform: translateX(100px);
      transform: translateX(100px);
    }
  }
  @keyframes slide-right {
    0% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
    }
    100% {
      -webkit-transform: translateX(100px);
      transform: translateX(100px);
    }
  }

  .swing-in-left-fwd {
    -webkit-animation: swing-in-left-fwd 0.5s
      cubic-bezier(0.175, 0.885, 0.32, 1.275) both;
    animation: swing-in-left-fwd 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)
      both;
  }

  @-webkit-keyframes swing-in-left-fwd {
    0% {
      -webkit-transform: rotateY(100deg);
      transform: rotateY(100deg);
      -webkit-transform-origin: left;
      transform-origin: left;
      opacity: 0;
    }
    100% {
      -webkit-transform: rotateY(0);
      transform: rotateY(0);
      -webkit-transform-origin: left;
      transform-origin: left;
      opacity: 1;
    }
  }
  @keyframes swing-in-left-fwd {
    0% {
      -webkit-transform: rotateY(100deg);
      transform: rotateY(100deg);
      -webkit-transform-origin: left;
      transform-origin: left;
      opacity: 0;
    }
    100% {
      -webkit-transform: rotateY(0);
      transform: rotateY(0);
      -webkit-transform-origin: left;
      transform-origin: left;
      opacity: 1;
    }
  }

  .swing-in-right-fwd {
    -webkit-animation: swing-in-right-fwd 0.5s
      cubic-bezier(0.175, 0.885, 0.32, 1.275) both;
    animation: swing-in-right-fwd 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)
      both;
  }

  @-webkit-keyframes swing-in-right-fwd {
    0% {
      -webkit-transform: rotateY(-100deg);
      transform: rotateY(-100deg);
      -webkit-transform-origin: right;
      transform-origin: right;
      opacity: 0;
    }
    100% {
      -webkit-transform: rotateY(0);
      transform: rotateY(0);
      -webkit-transform-origin: right;
      transform-origin: right;
      opacity: 1;
    }
  }
  @keyframes swing-in-right-fwd {
    0% {
      -webkit-transform: rotateY(-100deg);
      transform: rotateY(-100deg);
      -webkit-transform-origin: right;
      transform-origin: right;
      opacity: 0;
    }
    100% {
      -webkit-transform: rotateY(0);
      transform: rotateY(0);
      -webkit-transform-origin: right;
      transform-origin: right;
      opacity: 1;
    }
  }

  /* Grid Layout */
  .main-grid {
    --private-block-margins: 0;
    /* private variables are for local componenet use */
    position: fixed;
    left: 0;
    right: 0;
    top: var(--private-block-margins);
    bottom: var(--private-block-margins);
    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.06), 0 2px 5px 0 rgba(0, 0, 0, 0.2);
    overflow: hidden;
    /*logic styles*/
  }
  @media (max-width: 767px),
    (min-width: 768px) and (max-width: 1023px),
    (min-width: 1024px) and (max-width: 1439px) {
    .main-grid > * {
      min-height: 100vh;
    }
  }
  @media (min-width: 1440px) {
    .main-grid > * {
      max-height: calc(100vh - 40px);
    }
  }
  @media (min-width: 768px) {
    .main-grid {
      display: grid;
      grid-template-areas: 'side-a main side-b';
      grid-template-columns: minmax(260px, 30%) 1fr auto;
    }
  }
  @media (min-width: 1440px) {
    .main-grid {
      --private-block-margins: 20px;
      width: 1396px;
      margin: 0 auto;
    }
  }
  @media (max-width: 767px) {
  }
  @media (min-width: 768px) and (max-width: 1023px) {
  }
  @media (max-width: 450px) {
    /* .main-grid.chat-open .main-content {
      transform: translateX(-100%) !important;
    } */

    .chat-open {
      transform: translateX(-100%) !important;
    }
  }

  .main-side {
    grid-area: side-a;
  }

  .main-content {
    grid-area: main;
  }

  /* elements */

  .showUsers-button,
  .showChat-button {
    color: #009688;
    --fc-button-box-shadow: 0;
  }

  .showUsers-button {
    position: absolute;
    --fc-button-background-color: #ffffff00;
    height: 45px;
    width: 45px;
  }

  .profile-image {
    flex-shrink: 0;
    display: block;
    height: 60px;
    border-radius: 50%;
  }

  .big-title {
    margin: 5px 0;
    font-size: 19rem;
  }

  .section-title {
    color: var(--dark-green);
    font-size: 14rem;
    margin-bottom: 10px;
  }

  .info-text {
    font-size: 14rem;
    color: rgba(0, 0, 0, 0.45);
  }

  .status {
    letter-spacing: -14px;
    filter: grayscale(1);
  }
  .status.is-seen {
    filter: grayscale(0);
  }

  .text-input {
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    background-color: var(--white);
    padding: 10px;
    margin: 5px 10px;
    border-radius: 20px;
    border-width: 0;
  }
  .text-input:focus {
    outline: none;
  }

  .common-button {
    padding: 8px;
  }
  .common-button:hover,
  .common-button:focus {
    outline: none;
  }
  .common-button:hover .icon,
  .common-button:focus .icon {
    filter: grayscale(1) opacity(1);
  }
  .common-button .icon {
    display: block;
    width: 24px;
    height: 24px;
    font-size: 18px;
    vertical-align: middle;
    text-align: center;
    filter: grayscale(1) opacity(0.5);
    transition: 0.2s;
  }

  /*** components ***/
  .common-header {
    --common-header-border-color: #e0e0e0;
    display: flex;
    background-color: var(--main-gray);
    height: 80px;
    padding: 10px 16px;
    flex-shrink: 0;
  }
  .common-header-content {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    display: block;
    margin: auto 15px;
    line-height: 1.5;
  }
  .common-header-title {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    display: block;
  }

  .common-header-users,
  .common-header-start {
    display: flex;
    margin-right: auto;
    width: 100%;
  }

  .common-header-users {
    align-items: center;
    justify-content: space-between;
  }
  /* .common-header-content {
    margin: auto 15px;
    line-height: 1.5;
  } */

  .common-header-content-users {
    display: flex;
    align-items: center;
  }

  .profile-image-users {
    height: 20px;
  }

  .common-header-title-users {
    margin-left: 10px;
  }

  .common-nav-list {
    display: flex;
  }
  .common-nav-item {
    margin-left: 10px;
  }

  hr.rounded {
    border-top: 2px solid #bbb;
    border-radius: 5px;
    width: 93%;
  }
  /*main*/
  .main-content {
    height: calc(100vh - 40px);
    display: flex;
    flex-direction: column;
  }
  .main-content .common-header {
    border-left: solid 1px var(--common-header-border-color);
  }
  @media (max-width: 767px) {
    .main-content {
      position: fixed;
      right: -100%;
      top: 0;
      bottom: 0;
      width: 100%;
      transition: transform 0.4s;
      height: unset !important;
    }

    .is-you {
      margin-right: 16px;
    }
    .messanger {
      height: calc(100vh - 110px);
    }
  }

  .messanger {
    /* min-height: calc(100% - 40px); */
    /* min-height: calc( 100vh - 110px); */
    overflow-y: auto;
    flex: 1;
    background-color: #e5ddd5;
  }

  .messanger-list {
    display: flex;
    flex-direction: column;
    padding: 10px 3%;
  }

  .common-message {
    position: relative;
    background-color: var(--white);
    width: -moz-fit-content;
    width: fit-content;
    max-width: 500px;
    padding: 8px;
    border-radius: 8px;
    box-shadow: 0 1px 0.5px rgba(0, 0, 0, 0.13);
    margin-bottom: 10px;
    margin-left: 15px;
  }

  .common-message-user {
    /* display: flex; */
    margin-bottom: 10px;
  }

  .common-message-user img {
    height: 40px;
  }

  .common-message-user p {
    margin-left: 10px;
    font-weight: bold;
  }

  .common-message time {
    font-size: 11rem;
    color: rgba(0, 0, 0, 0.45);
    /* float: left; */
    margin-top: 8px;
    margin-left: 10px;
  }
  .common-message .status {
    float: right;
    padding-right: 10px;
    text-align: end;
  }
  .common-message.bot::before,
  .common-message::before {
    position: absolute;
    left: -10px;
    top: 0;
    content: '';
    display: block;
    border: solid;
    border-width: 0px 16px 16px 0px;
    border-color: transparent;
    border-right-color: var(--white);
  }

  .msg-wrapper {
    display: flex;
    align-items: baseline;
  }

  .common-message-content {
    margin-top: 10px;
    word-wrap: anywhere;
  }

  .common-message.is-you {
    --user-color-message: #cfe9ba;
    /* align-self: flex-end; */
    float: right;
    background-color: var(--user-color-message);
  }

  .common-message.is-you::before {
    left: auto;
    right: -28px;
    border-width: 0px 16px 16px 16px;
    border-color: transparent;
    border-left-color: var(--user-color-message);
  }

  .common-message.is-you + .is-you::before {
    display: none;
  }
  .common-message.bot + .bot::before,
  .common-message.is-other + .is-other::before {
    display: none;
  }

  .message-box {
    display: flex;
    flex-shrink: 0;
    background-color: #f0f0f0;
    padding: 5px 10px;
    align-items: flex-end;
  }
  .message-box .text-input {
    flex: 1;
    --fc-input-font-color: #009688;
  }

  #reply-box h3 {
    color: #009688;
  }
  #reply-box h4 {
    margin-left: 5px;
  }

  /* Message Reply */
  .reply-wrapper {
    margin-top: 5px;
  }
  .reply-message-is-you {
    width: 100%;
  }

  .reply-message-is-you .reply-message {
    background-color: #b2e18e;
    border-radius: 7.5px;
    display: flex;
    overflow: hidden;
  }

  .reply-message-is-you span {
    background-color: #35cd96 !important;
    flex: none;
    width: 4px;
  }
  .reply-message-content {
    padding: 4px 8px 8px 12px;
  }

  .reply-message-content .reply-content {
    font-size: 13.2px;
    max-height: 60px;
  }
  .reply-message-other {
    width: 100%;
  }
  .reply-message-other .reply-message {
    border-radius: 7.5px;
    background-color: #f7f7f7;
    display: flex;
    overflow: hidden;
  }
  .reply-message-other span {
    background-color: #35cd96 !important;
    width: 4px;
  }
  .reply-message-content-other {
    padding: 4px 8px 8px 12px;
  }

  .reply-message-content-other .common-reply-content {
    flex-grow: 1;
    overflow: hidden;
  }

  .reply-message-content-other .common-reply-content .reply-content {
    max-height: 60px;
    font-size: 13.2px;
  }

  /*side (users)*/
  .main-side {
    display: flex;
    flex-direction: column;
    background-color: var(--white);
  }

  .users {
    overflow-y: auto;
    scrollbar-width: thin;
    /*-webkit-overflow-scrolling:touch;*/
    background-color: var(--white);
  }

  .users-item {
    display: flex;
    padding: 0px 15px;
    margin: 15px;
    place-content: stretch flex-start;
    align-items: center;
  }

  .users-item-button {
    display: grid;
    grid-template-columns: 50px 1fr;
    grid-column-gap: 15px;
    padding: 0 15px;
    cursor: pointer;
    grid-template-areas: 'image header' 'image content';
  }
  .users-item-button:focus {
    background-color: #ebebeb;
    outline: none;
  }

  .users-item .profile-image {
    flex-shrink: 0;
    margin: auto;
  }

  .users-item-header {
    grid-area: header;
  }
  .users-item-content {
    grid-area: content;
  }
  .users-item .profile-image {
    flex-shrink: 0;
    height: 50px;
    margin: auto;
  }
  .users-item-header {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    display: block;
    display: flex;
    padding-top: 10px;
  }
  .users-item-title {
    text-transform: capitalize;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    display: block;
    flex: 1;
    font-weight: bold;
    margin-left: 10px;
  }

  .users-item-title .is-you {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    display: block;
    flex: 1;
    font-weight: bold;
    margin-right: 10px;
  }
  .users-item-time {
    font-size: 12rem;
    opacity: 0.6;
  }
  .users-item-last {
    flex: 1;
    opacity: 0.6;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  .users-item-content {
    display: flex;
    padding-bottom: 10px;
    border-bottom: solid 1px #f2f2f2;
  }
  .users-item-info {
    display: flex;
  }
  .users-item:last-child .users-item-content {
    border-bottom-width: 0;
  }

  .common-box {
    background-color: var(--white);
    padding: 20px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
    margin-bottom: 10px;
  }
  .common-box p {
    font-size: 14rem;
    color: #4a4a4a;
  }

  .reply-button {
    color: #009688;
    float: right;
    --fc-button-min-height: 20px;
    margin-left: 20px;
  }

  .leave-chat {
    display: flex;
    height: 10px;
    margin-top: 15px;
    color: #009688;
  }
  .bot p {
    color: #009688;
  }
  .user1 p {
    color: #f19eae;
  }
  .user2 p {
    color: #77b8a0;
  }
  .user3 p {
    color: #f4ade9;
  }
  .user4 p {
    color: #ff947a;
  }
  .user5 p {
    color: #fdd35d;
  }
  .user6 p {
    color: #acb5d6;
  }
  .user7 p {
    color: #ff8bfe;
  }
  .user8 p {
    color: #f6b923;
  }

  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

  /* Join Page */
  .join-container {
    max-width: 50%;
    margin: auto;
    color: #fff;
  }

  .join-header {
    text-align: center;
    padding: 30px;
    background: var(--dark-color-a);
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }

  .join-header-bot {
    text-align: center;
    padding: 10px;
    text-shadow: -1px 1px 2px rgb(0 150 136);
  }

  .join-chat-button {
    --fc-input-font-color: #009688;
    color: #009688;
    --fc-button-min-height: 50px;
  }
  #userInput {
    --fc-input-font-color: #009688;
  }

  .join-main-form {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .myAvatar,
  .otherAvatar {
    --fc-avatar-background-color: transparent;
  }

  .myAvatar {
    border: outset;
    --fc-avatar-size: 95px;
  }
  .user-login-bot-wrapper {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .user-login-bot {
    height: 150px;
    margin: 10px auto;
    flex-shrink: 0;
    display: block;
    border-radius: 50%;
  }

  .user-login-bot-button {
    border-radius: 50%;
    --fc-button-background-color: transparent;
    --fc-button-box-shadow: 0;
    --fc-button-default-border-radius: 50%;
    --fc-button-active-background-shadow: 0;
    --fc-button-hover-background-shadow: 0;
  }

  .join-header.choose {
    padding: 10px;
    text-shadow: -1px 1px 2px rgb(0 150 136);
  }

  .join-main {
    display: flex;
    padding: 10px 40px;
    background: var(--dark-color-b);
    justify-content: space-evenly;
  }

  .join-main fc-avatar {
    --fc-avatar-size: 90px;
    --fc-avatar-background-color: transparent;
  }

  .join-main p {
    margin-bottom: 20px;
  }

  .join-main .form-control {
    margin-bottom: 20px;
    color: #019789;
  }

  .join-main label {
    display: block;
    margin-bottom: 5px;
  }

  .join-main input[type='text'] {
    font-size: 16px;
    padding: 5px;
    height: 40px;
    width: 100%;
  }

  .join-main select {
    font-size: 16px;
    padding: 5px;
    height: 40px;
    width: 100%;
  }

  .join-main .btn {
    margin-top: 20px;
    width: 100%;
  }

  @media (max-width: 450px) {
    .join-container {
      max-width: 100% !important;
    }

    .join-header {
      padding: 10px !important;
      font-size: 15px !important;
    }

    .join-header-bot h1 {
      font-size: 1.5em !important;
    }
    .join-header-bot h2 {
      font-size: 1em !important;
    }

    .join-main {
      padding: 0 !important;
      margin-bottom: 10px !important;
    }

    .otherAvatar,
    .myAvatar {
      height: 50px !important;
    }

    #userInput {
      --fc-input-width: 300px !important;
    }
    .form-control {
      margin-bottom: 0 !important;
    }
    .user-login-bot {
      margin-top: 15px !important;
      height: 100px !important;
    }
    .user-login-bot-wrapper {
      margin-top: 15px !important;
    }
  }

  @media (max-width: 700px) {
    .chat-main {
      display: block;
    }

    .chat-sidebar {
      display: none;
    }
  }

  /* Greeting */

  .greeting {
    margin: 80px auto;
    border-radius: 20%;
    width: 60%;
  }
  @media (max-width: 450px) {
    .greeting {
      margin: 200px auto !important;
      width: 90% !important;
    }
  }

  /** Home **/
  .main-hero {
    position: relative;
    min-height: 570px;
    /* background-color: rgb(33, 22, 133); */
    /* background-image: url(./images/home-backdrop-mobile.svg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover; */
  }

  .main-chat {
    /* width: 720px; */
    height: 720px;
    margin-right: auto;
    margin-left: auto;
    border: outset;
    border-radius: 5px;
  }

  .logo {
    position: relative;
    top: -2px;
    width: 102px;
    height: 33px;
  }

  section.half {
    width: 60%;
    max-width: 780px;
    padding: 0;
  }

  .half > h1 {
    margin-top: 100px;
  }

  .hero-inner > h2 {
    margin-bottom: 80px;

    /* or 142% */

    /* PRIMARY / fc-brand-blue-200 */
    color: #bdd8ff;
    font-weight: 400;
    font-size: 20px;
    line-height: 28px;
  }

  .featuring {
    padding-top: 30px;
    border-radius: 20px;
  }

  /* stylelint-disable  no-descending-specificity, order/properties-order */
  .featuring > a {
    display: inline-block;
    margin: 25px;
  }

  p {
    /* padding-top: 15px; */
    color: black;
    margin-left: 10px;
    line-height: 23px;
  }

  /** not found */
  .not-found img {
    width: 100%;
  }

  .header-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 30px 0;
  }

  .not-found h1 {
    margin-top: 300px;
  }

  /** questionaire **/
  .hero {
    padding-top: 100px;
    background-color: rgb(33, 22, 133);
    background-image: url('./images/backdrop.svg');
    background-repeat: no-repeat;
    background-position: top;
    background-size: cover;
  }

  .hero > h4 {
    margin: 0;
    color: white;
    font-weight: normal;
  }

  .hero > h5 {
    margin: 40px 0 10px 0;
    font-style: normal;
    line-height: 34px;
  }

  .hero-inner h1 {
    margin-top: 5px;
    font-size: 24px;
    line-height: 32px;
  }

  .hero-inner p {
    margin-top: 0;
    margin-bottom: 0;
    padding-bottom: 0;
    color: var(--fc-brand-blue);
    font-size: 16px;
    line-height: 23px;
  }

  /** result **/
  .hero-result {
    height: 218px;
    background-image: url('./images/result-backdrop-mobile.svg');
    background-position: bottom;
  }

  /** improve **/
  .hero-improve {
    height: 182px;
    background-image: url('./images/improve-backdrop-mobile.svg');
    background-position: bottom;
  }

  .left-box {
    width: 100%;
  }

  .improve-label {
    width: 100%;
  }

  /* HOME */
  .home-data-inner {
    max-width: 980px;
  }

  .featuring-inner {
    padding: 20px;
    background: #f2f5fc;
    border-radius: 20px;
  }

  .featuring-inner > p {
    margin: 0 0 20px;
    padding-top: 0;
    color: #1e283d;
    font-size: 20px;
    line-height: 30px;
    text-align: center;
  }

  .featuring-data {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }

  .doc-btns > a {
    display: flex;
    align-items: center;
    margin-right: 0;

    /* width: 100%; */
    margin-bottom: 14px;
    padding: 10px 20px;
    color: var(--fc-primary);
    line-height: 23px;
    text-decoration: none;
    background: rgb(242 245 252 / 60%);
    border-radius: 40px;
  }

  .doc-btns {
    display: block;
    margin-top: 40px;
  }

  .doc-btns > a > span {
    margin-left: 10px;
  }

  page-home .hero-inner > h1 {
    margin-top: 50px;
    font-size: 32px;
    line-height: 40px;
  }

  .main-hero .hero-inner p {
    font-size: 18px;
  }

  .featuring-data > a {
    /* flex: 1; */
    margin-right: 0;
    margin-bottom: 20px;
  }

  a.creator img {
    max-width: 100%;
    height: auto;
  }

  .featuring-data > a:last-child {
    margin-right: 0;
  }

  .quiz-q::before {
    margin-right: 10px;
    color: #00d894;
    content: attr(place);
  }

  .quiz-q {
    font-weight: 600;
    font-size: 24px;
  }

  .quiz-a span {
    margin-left: 10px;
    font-size: 16px;
    line-height: 23px;
  }

  .quiz-a {
    margin-top: 30px;
  }

  page-home .hero-inner > h2 {
    font-size: 16px;
    line-height: 20px;
  }

  .result-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 30px;
    padding: 30px;
    background: #f2f5fc;
    border-radius: 20px;
  }

  .box-tags ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    padding-inline-start: 0;
  }

  .box-tags ul,
  .box-tags li {
    list-style-type: none;
  }

  ul,
  li {
    list-style-type: none;
  }

  .box-title {
    display: flex;
    align-items: center;
    color: #025;
    font-weight: 600;
    font-size: 16px;
    line-height: 23px;
  }

  .box-tags ul li {
    display: flex;
    align-items: center;
    margin-right: 10px;
    margin-bottom: 12px;
    padding: 4px 12px;
    color: #1e283d;
    font-size: 16px;
    line-height: 23px;
    text-align: center;
    background: #dce3f3;
    border-radius: 30px;
    cursor: pointer;
  }

  i.impact {
    background-image: url(./images/@impact.svg);
  }

  i.leader {
    background-image: url(./images/@leadership.svg);
  }

  i.craft {
    background-image: url(./images/@craftmanship.svg);
  }

  i.business {
    background-image: url(./images/@businessInv.svg);
  }

  .box-title i {
    display: block;
    width: 20px;
    height: 18px;
    margin-right: 15px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
  }

  .result-data {
    margin-top: 50px;
  }

  .quiz-a > div {
    margin-bottom: 12px;
  }

  .box-subtitle {
    margin-bottom: 25px;

    /* SHADES / fc-blue-gray-500 */
    color: #8d9fc9;
    font-size: 16px;
    line-height: 23px;
  }

  .box-questions > div > span {
    margin-left: 12px;
  }

  .box-questions > div {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }

  fc-radio {
    --fc-radio-checked-color: #1f75f7;
    --fc-radio-padding: 0 40px 0;
    --fc-radio-line-height: 1.5;

    margin-bottom: 20px;
    font-size: 24px;
    line-height: 32px;
  }

  .goal-items ul {
    display: flex;
    justify-content: flex-start;
    color: white;
    font-weight: 600;
    font-size: 24px;
    line-height: 34px;
    padding-inline-start: 0;
  }

  page-notepad .hero-inner {
    max-width: 100%;
  }

  .goal-items li {
    margin-right: 15px;
    padding: 6px 23px;

    /* background: rgb(189 216 255 / 30%); */
    border-radius: 60px;
    cursor: pointer;
    transition: background 0.3s;

    /* color: #00D894; */
  }

  .goal-items li > span {
    margin-left: 10px;
    color: #00d894;
  }

  .goal-items li.active {
    background: #bdd8ff4d;
  }

  .goal-items li:hover {
    background: #bdd8ff4d;
  }

  .right-box {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .right-box > fc-button {
    /*     min-width: 120px; */
  }

  section.not-found h3 {
    margin-top: 20px;
    color: white;
    font-weight: 400;
    font-size: 20px;
  }

  section.not-found h2 {
    margin-bottom: 0;
    font-weight: 400;
    font-size: 42px;
    line-height: 56px;
  }

  section.not-found h1 {
    margin-top: 170px;
    margin-bottom: 20px;
    color: #e5fef6;
    font-weight: 900;
    font-size: 110px;
    opacity: 0.2;
  }

  .bottom-data {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding-bottom: 30px;
  }

  #sub-menu {
    position: absolute;
    left: 0;
    width: 170%;
    margin-top: 5px;
    overflow: hidden;
    background: rgb(0 34 85 / 70%);
    border-radius: 10px;
    visibility: hidden;
    opacity: 0;
    transition: all 0.15s ease-in;
    padding-inline-start: 0;
  }

  li.type-drop a:hover {
    background: #002255b3;
  }

  #sub-menu > li {
    display: flex;
    justify-content: center;
    padding: 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  }

  #sub-menu > li > a {
    display: flex;
    justify-content: start;
    width: 100%;
    margin: 0;
    padding: 5px 10px;
    color: white;
    text-decoration: none;
    border-radius: 0;
  }

  #main-menu > li:hover #sub-menu {
    visibility: visible;
    opacity: 1;
  }

  li.type-drop a {
    position: relative;
    background: 0;
  }

  ul#main-menu > li:first-child a {
    margin-left: 0;
  }

  li.type-drop > a::after {
    position: absolute;
    top: 8px;
    right: 8px;
    display: block;
    width: 16px;
    height: 16px;
    background: url('./images/arrow-down.svg');
    content: '';
  }

  ul#main-menu > li:not(.type-notepad) {
    display: none;
  }

  @media (min-width: 992px) {
    ul#main-menu > li:not(.type-notepad) {
      display: block;
    }

    page-home .hero-inner > h2 {
      font-size: 24px;
      line-height: 34px;
    }

    header nav a {
      padding: 5px 25px;
      font-size: 16px;
    }

    .box-title i {
      width: 24px;
      height: 24px;
    }

    .hero-result {
      /* height: 218px; */
      background-image: url('./images/result-backdrop.svg');
    }

    .hero-improve {
      height: 282px;
      background-image: url('./images/improve-backdrop.svg');
    }

    section.not-found h3 {
      font-size: 26px;
    }

    .bottom-data {
      position: static;
      align-items: flex-start;
      width: auto;
      padding: 0;
    }

    section.not-found h2 {
      font-size: 56px;
      line-height: 70px;
    }

    section.not-found h1 {
      margin-top: 140px;
      margin-bottom: 70px;
      font-size: 160px;
    }

    .main-hero {
      height: 720px;
      /* min-height: auto; */
      /* background-image: url(./images/home-backdrop.svg);
    background-position: top; */
    }

    .quiz-a span {
      font-size: 24px;
      line-height: 34px;
    }

    .doc-btns {
      display: flex;
      flex-direction: row;
      align-items: center;
    }

    .hero-inner p {
      font-size: 24px;
      line-height: 34px;
    }

    .box-tags ul {
      max-width: 80%;
    }

    .hero-inner h1 {
      font-size: 32px;
      line-height: 40px;
    }

    .result-box {
      flex-direction: row;
    }

    .quiz-q {
      font-size: 32px;
    }

    .featuring-data > a {
      margin-bottom: 0;
    }

    .box-title {
      font-weight: 400;
      font-size: 24px;
      line-height: 34px;
    }

    .featuring-inner > p {
      font-size: 24px;
      line-height: 34px;
      text-align: left;
    }

    .featuring-data {
      flex-direction: row;
    }

    .featuring-inner {
      padding: 50px;
    }

    .doc-btns > a:first-child {
      margin-right: 10px;
    }

    .hero-inner {
      max-width: 60%;
      padding: 20px 0;
    }

    page-home .hero-inner > h1 {
      font-size: 56px;
      line-height: 70px;
    }

    .hero-inner > h2 {
      font-size: 24px;
      line-height: 34px;
    }

    .quiz-a > div {
      margin-bottom: 20px;
    }
  }
`;
