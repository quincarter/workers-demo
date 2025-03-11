import { css } from 'lit';

export const DialogStyles = css`
  :host {
  }

  dialog {
  }

  dialog,
  ::backdrop {
    overscroll-behavior: contain;
  }

  ::backdrop {
    background-color: red;
  }
`;
