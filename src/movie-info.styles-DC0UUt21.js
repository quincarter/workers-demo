import{i as e}from"./index-DkrQSTNq.js";const o=e`
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
    color: #fff;
  }

  .close-button {
    padding: 0.75rem 1rem;
    font-weight: 600;
    font-size: 25px;
    position: absolute;
    right: 1rem;
    border: none;
    color: #fff;
    cursor: pointer;
    background-color: transparent;
  }

  .close-button:hover {
    border-radius: 50%;
    background-color: rgb(111 111 111 / 80%);
  }

  .container {
    display: flex;
    flex-direction: column;
    gap: 2rem;
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

  .rating {
    display: flex;
    gap: 1rem;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .star::before {
    content: '\\2605';
    padding-right: 1rem;
  }

  .thumbs-up::before {
    content: '\\1F44D';
    padding-right: 1rem;
  }

  .people {
    padding-inline: 2rem;
    position: relative;
    top: -10rem;
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

  .links {
    display: flex;
    flex-direction: row;
    gap: 2rem;
    justify-content: center;
    align-items: center;
  }

  .links > a > svg,
  .links > a > img {
    height: 3rem;
  }
`;export{o as MovieInfoStyles};
