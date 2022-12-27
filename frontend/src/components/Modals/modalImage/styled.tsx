import styled from "styled-components";

export const ModalImageStyled = styled.div`
  @media (min-width: 320px) {
    .containerModal {
      display: flex;
      justify-content: center;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      position: fixed;
      background-color: rgba(0, 0, 0, 0.5);
    }

    .hidden {
      display: none;
    }
  }
`;

export const ImageProductStyled = styled.div`
  @media (min-width: 320px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    margin-top: 90px;
    width: 90%;
    height: 90vw;
    max-width: 730px;
    max-height: 560px;
    background: var(--color-white-fixed);
    border-radius: 8px;
    padding: 0;

    > button {
      width: 90%;
      display: flex;
      justify-content: flex-end;
      margin-top: 10px;
    }

    div {
      display: flex;
      justify-content: space-around;
      align-items: center;
      width: 100%;
      height: 90%;
    }

    > div > img {
      max-width: 90%; */
      max-height: 90%;
    }
  }
`;
