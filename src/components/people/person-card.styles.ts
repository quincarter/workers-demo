import { css } from 'lit';

export const PersonCardStyles = css`
  img {
    border-radius: 50%;
    object-fit: cover;
    height: 12rem;
    width: 12rem;
  }

  .person-bubble {
    width: 12rem;
    height: 12rem;
  }

  .text {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    justify-content: center;
  }

  .text > p {
    margin-block: 0;
    text-align: center;
  }
`;
