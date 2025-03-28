import { css, CSSResultOrNative } from 'lit';

export const GenericCardStyles: CSSResultOrNative = css`
  a {
    text-decoration: none;
    color: var(--primary-text-color);
  }

  a:hover {
    cursor: pointer;
    text-decoration: underline;
  }

  /* Wrapper to replace the :host element */
  .card-wrapper.default {
    display: grid;
    position: relative;
    z-index: 3;
  }

  .card-wrapper.no-outline-column {
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }

  .card-wrapper.no-outline-row {
    align-items: center;
    display: flex;
    flex-direction: row;
    gap: 1rem;
    text-align: center;
  }

  /* Card variants */
  .default > .card {
    box-shadow: var(--primary-box-shadow);
    background-color: var(--primary-card-background-color);
    opacity: 0.6;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: absolute;
    height: 0;
    overflow: hidden;
    width: 100%;
    transition: all ease-in-out 0.25s;
  }

  img:hover + .card,
  .card:hover,
  .card-wrapper.default {
    cursor: pointer;
    z-index: 2;
    height: 100%;
    transition: height ease-in-out 0.25s;
  }

  .no-outline-column > .card {
    background-color: transparent;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1rem;
  }

  .no-outline-row > .card {
    background-color: transparent;
    display: flex;
    flex-direction: column;
    line-height: 1.5rem;
    justify-content: space-between;
    padding: 1rem;
  }

  /* Card Class Options */
  .card-wrapper.interactive {
    cursor: pointer;
  }

  .card-wrapper.disabled {
    cursor: not-allowed;
    background-color: var(--disabled-card-background-color);
    color: var(--disabled-card-text-color);
  }

  img.default {
    border-radius: 10px 10px 5px 5px;
    box-shadow: var(--image-box-shadow);
    margin-inline: auto;
    position: relative;
    z-index: 1;
  }

  img.no-outline-column {
    margin-inline: auto;
    position: relative;
    top: 3rem;
    width: 100%;
  }

  img.avatar {
    border-radius: 50%;
    object-fit: cover;
    object-position: 100% 0;
  }

  ::slotted[name='card-body'] {
    font-size: 0.9em;
    max-height: 10rem;
    overflow: auto;
    margin-block: 1rem;
    padding-inline: 1rem;
  }

  .selected-flag {
    height: 1rem;
    width: 1rem;
    background-color: yellow;
    border-radius: 50%;
    position: absolute;
    z-index: 4;
    left: 0.5rem;
    top: 0.5rem;
  }
`;
