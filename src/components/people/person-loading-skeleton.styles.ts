import { css } from 'lit';

export const PersonLoadingSkeletonStyles = css`
  :host {
    display: grid;
    width: 100%;
  }
  .skeleton-box {
    display: inline-block;
    height: 1em;
    position: relative;
    overflow: hidden;
    background-color: #dddbdd;
  }

  .skeleton-box.movie-poster {
    width: 10rem;
    height: 15rem;
    border-radius: 15px;
    position: relative;
    top: 3rem;
    margin-inline: auto;
  }
  .skeleton-box.title {
    width: 50%;
    height: 2rem;
    margin-block: 1rem;
  }
  .skeleton-box.description {
    width: 100%;
    height: 1rem;
  }

  .skeleton-box::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transform: translateX(-100%);
    background-image: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0) 0,
      rgba(255, 255, 255, 0.2) 20%,
      rgba(255, 255, 255, 0.5) 60%,
      rgba(255, 255, 255, 0)
    );
    -webkit-animation: shimmer 5s infinite;
    animation: shimmer 5s infinite;
    content: '';
  }
  @-webkit-keyframes shimmer {
    100% {
      transform: translateX(100%);
    }
  }
  @keyframes shimmer {
    100% {
      transform: translateX(100%);
    }
  }
`;
