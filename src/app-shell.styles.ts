import { css } from 'lit';

export const AppShellStyles = css`
  #outlet {
    margin: 1rem;
  }

  @media screen and (max-width: 1150px) {
    #outlet {
      margin: 0;
    }
  }
`;
