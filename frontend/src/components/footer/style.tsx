import styled from "styled-components";

export const FooterStyle = styled.footer`
  @media (min-width: 320px) {
    width: 100%;
    justify-content: space-around;
    gap: 5px;
    display: flex;
    flex-direction: column;
    background: var(--color-grey-0);
    align-items: center;
    color: var(--color-white-fixed);
  
  .footer--logo {
    max-width: 120px;
    width: 40%;
    margin: 20px;
  }

  p {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    color: white;
  }

  .footer--arrow {
    max-width: 35px;
    width: 15%;
    margin: 20px;
  }
  }
  @media (min-width: 640px) {
    flex-direction: row;
  }
`;
