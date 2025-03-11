import { css } from 'lit';

export const MovieInfoStyles = css`
  .movie-info.selected {
    transition: width 1s ease-in-out;
    overflow-wrap: anywhere;
    width: 100%;
    overflow-y: auto;
    height: calc(100vh - 4.75rem);
    background-color: black;
  }
  .movie-info {
    transition: width 1s ease-in-out;
    width: 0px;
    height: 100%;
  }

  .main-info {
    position: relative;
    top: -10rem;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .header {
    align-items: end;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    flex: 1 1 100%;
    gap: 1rem;
    justify-content: space-evenly;
  }

  .hero > img {
    width: 100%;
    object-fit: contain;
  }

  .poster > img {
    height: 16rem;
    border-radius: 10px;
  }

  .metadata {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    text-align: right;
  }

  .metadata > p {
    margin-block: 0;
  }

  .star:before {
    content: '\\2605';
  }

  section.people {
    padding-inline: 2rem;
  }
  ul.people-list {
    padding-inline: 0;
    list-style: none;
    display: flex;
    gap: 1rem;
    height: 20rem;
    overflow-x: scroll;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none;
  }

  ul.people-list::-webkit-scrollbar {
    display: none;
  }
`;
