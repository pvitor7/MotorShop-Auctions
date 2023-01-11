import styled from "styled-components";

export const ProfileWelcomeStyle = styled.footer`
  @media (min-width: 320px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-top: 80px;
    padding: 60px 0px;
    gap: 50px;
    background: linear-gradient(
      to bottom,
      var(--color-brand-2) 0,
      var(--color-brand-2) 50%,
      var(--color-gray-10) 50%
    );
    color: var(--color-gray-10);

    > div {
      display: flex;
      flex-direction: column;
      background-color: var(--color-gray-10);
      width: 90%;
      height: auto;
      max-height: 480px;
      border-radius: 5px;
      padding: 30px 50px;
      gap: 25px;
    }

    > div > div > .icon-user {
      font-size: 30px;
      width: 70px;
      height: 70px;
    }

    > div > .name-profile {
      color: #000000;
      font-family: "Lexend", sans-serif;
      font-style: normal;
      font-weight: 600;
      line-height: 25px;
      display: flex;
      width: 100%;
      align-items: center;
      gap: 10px;
    }

    > div > .description {
      display: flex;
      width: 100%;
      max-height: 150px;
      font-family: "Inter", sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 28px;
      color: #495057;
      overflow: hidden;
    }

    > div > button {
      width: 160px;
      height: 48px;
      padding: 10px;
      height: auto;
      font-size: 14px;
      border: solid 2px #4529e6;
      text-transform: capitalize;
      font-weight: bold;
      position: static;
    }
  }

  @media (min-width: 640px) {

    > div > .name-profile {
      font-size: 18px;
    }

    > div > .description {
      font-size: 16px;
    }

    > div > button {
      font-size: 16px;
    }
  }

  @media (min-width: 920px) {

    > div > .name-profile {
      font-size: 20px;
    }

    > div > .description {
      font-size: 18px;
    }
    > div > button {
      font-size: 18px;
    }
  }
`;
