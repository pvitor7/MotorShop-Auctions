import styled from "styled-components";
import { motion } from "framer-motion";

export const ProductPageStyled = styled(motion.div)`
  @media (min-width: 320px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding-bottom: 50px;
    background: linear-gradient(
      to bottom,
      var(--color-brand-2) 550px,
      #f1f3f5 0
    );

    .div--main {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 30px;
    }

    .div--main > .aside--mobile {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    aside {
      display: none;
    }

    div > button {
      position: static;
    }

    @keyframes spinner {
      to {
        transform: rotate(360deg);
      }
    }

    .loading-icon {
      width: 50%;
      padding: 10%;
      height: auto;
      color: var(--color-brand-2);
      animation: spinner infinite 1s linear;
    }
  }

  @media (min-width: 740px) {
    align-items: flex-start;
    justify-content: center;
    flex-direction: row;
    gap: 50px;

    .div--main > .aside--mobile {
      display: none;
    }

    aside {
      margin-top: 100px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 30px;
    }
  }
`;

export const ContainerIMG = styled(motion.div)`
  @media (min-width: 320px) {
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--color-gray-10);
    width: 95%;
    min-height: 350px;
    max-width: 751px;
    max-height: 355px;
    margin-top: 100px;
    border-radius: 4px;
    padding: 30px 10px;

    img {
      width: 100%;
      padding: 10px;
      max-height: 441px;
      max-width: 441px;
    }
  }
`;

export const ContainerInfoProduct = styled(motion.div)`
  @media (min-width: 320px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: var(--color-gray-10);
    width: 95%;
    max-width: 751px;
    padding: 30px;
    gap: 30px;
    justify-content: space-around;
    background: var(--color-gray-10);
    border-radius: 4px;

    h3 {
      font-weight: var(--font-heading-3-600);
      width: 100%;
    }

    div {
      width: 100%;
      height: 50px;
      display: flex;
      align-items: center;
      gap: 30px;
    }

    div > label {
      display: flex;
      flex-wrap: nowrap;
      justify-content: center;
      align-items: center;
      font-size: 15px;
      padding: 5px;
      height: 40px;
      width: 100px;
    }

    > label {
      width: 100%;
      font-size: 17px;
    }

    button {
      width: 100px;
      height: 38px;
      font-size: 15px;
    }

    .img--time-auction {
      width: 20px;
      color: var(--color-grey-0);
    }

    .auction-time {
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--color-grey-1);
      background-color: var(--color-feeback-sucess2);
      width: 150px;
      height: 30px;
      gap: 10px;
      border-radius: 32px;
      font-weight: var(--font-heading-1-700);
      padding: 5px;
    }
  }
`;

export const AuctionTimeStyled = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-grey-1);
  background-color: var(--color-feeback-sucess2);
  width: 150px;
  height: 30px;
  gap: 10px;
  border-radius: 32px;
  font-weight: var(--font-heading-1-700);
  padding: 5px;

  .img--time-auction {
    width: 20px;
    color: var(--color-grey-0);
  }
`;

export const ContainerDescription = styled(motion.div)`
  @media (min-width: 320px) {
    gap: 20px;
    width: 95%;
    max-width: 751px;
    padding: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background: var(--color-gray-10);
    border-radius: 4px;

    p {
      width: 95%;
      color: #495057;
      font-size: 15px;
      font-family: "Inter", sans-serif;
    }
  }
`;

export const ContainerComments = styled(motion.div)`
  @media (min-width: 320px) {
    display: flex;
    flex-direction: column;
    background: var(--color-gray-10);
    width: 95%;
    max-width: 751px;
    align-items: center;
    border-radius: 5px;
    padding: 20px 0;
    gap: 40px;
  }
`;

export const ContainerNewComments = styled(motion.div)`
  @media (min-width: 320px) {
    display: flex;
    width: 95%;
    max-width: 751px;
    flex-direction: column;
    padding: 30px;
    gap: 20px;
    background: #ffffff;
    border-radius: 4px;

    input {
      width: 90%;
    }

    button {
      padding: 20px;
      text-transform: none;
      position: static;
    }

    div {
      display: flex;
      width: 100%;
      flex-wrap: wrap;
      gap: 30px;
    }

    .comments-standart {
      display: flex;
      flex-wrap: wrap;
    }

    .comments-standart > label {
      color: #868e96;
      background: #e9ecef;
      border-radius: 24px;
      padding: 5px 12px;
    }
  }
`;

export const ContainerGalery = styled(motion.div)`
  @media (min-width: 320px) {
    display: flex;
    justify-content: center;
    gap: 10px;
    flex-wrap: wrap;
    background: var(--color-gray-10);
    width: 95%;
    max-width: 440px;
    padding: 30px 15px;

    h3 {
      width: 90%;
    }

    ul {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
    }

    img {
      width: 30%;
      margin: 20px 0px;
    }
  }
`;

export const Aside = styled(motion.aside)`
  @media (min-width: 320px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 450px;
    gap: 30px;
  }
`;

export const ContainerOwnerProduct = styled(motion.div)`
  @media (min-width: 320px) {
    display: flex;
    flex-direction: column;
    background: var(--color-gray-10);
    width: 95%;
    max-width: 440px;
    align-items: center;
    height: auto;
    max-height: 480px;
    border-radius: 5px;
    padding: 40px 20px;
    gap: 30px;

    .initialsName {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 30px;
      background-color: var(--color-brand-1);
      color: var(--color-gray-10);
      border-radius: 50%;
      width: 70px;
      height: 70px;
    }

    h4 {
      color: var(--color-grey-0);
      font-family: "Lexend", sans-serif;
      font-style: normal;
      font-weight: 600;
      font-size: 20px;
      line-height: 25px;
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .description {
      display: flex;
      width: 95%;
      color: var(--color-gray-2);
      font-size: 15px;
      font-family: "Inter", sans-serif;
    }

    button {
      padding: 15px;
      width: auto;
      height: auto;
      font-size: 15px;
      text-transform: none;
    }
  }
`;

export const LiCard = styled.li`
  display: flex;
  flex-direction: column;
  width: 90%;
  box-sizing: content-box;
  padding: 20px;
  font-family: "Inter", sans-serif;
  box-shadow: 0px 1px 4px -1px rgba(0, 0, 0, 0.25);

  p {
    color: #495057;
    display: flex;
    text-align: justify;
    width: 100%;
    margin: 0;
    margin-top: 10px;
    font-size: 13px;

    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
  }
`;

export const ListOffersStyled = styled.div`
  @media (min-width: 320px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 95%;
    background: #ffffff;
    padding: 30px;
    gap: 30px;
    border-radius: 4px;

    > div {
      display: flex;
      width: 95%;
      align-items: center;
      gap: 20px;
    }

    > div > button {
      height: 50px;
    }

    > ul {
      display: flex;
      width: 100%;
      max-width: 751px;
      max-height: 700px;
      flex-direction: column;
      align-items: center;
      gap: 30px;
      overflow: auto;
      padding: 10px 0;
    }

    > ul > li {
      display: flex;
      flex-direction: column;
      background: var(--color-gray-10);
      width: 95%;
      color: var(--color-gray-3);
      align-items: center;
      border-radius: 5px;
      padding: 20px 0;
      box-shadow: 0px 1px 4px -1px rgba(0, 0, 0, 0.25);
    }

    > ul > li:first-of-type {
      color: var(--color-random-7);
      font-size: 20px;
      font-weight: bold;
    }
  }
`;

export const ModalAddPhotoStyled = styled.div`
  position: fixed;
  padding-top: 20vh;
  width: 100vw;
  min-height: 100vh;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  z-index: 2;
  overflow-y: scroll;

  > form {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    width: 95%;
    height: 20vh;
    padding: 30px;
    max-width: 650px;
    background-color: white;
    position: absolute;
    border-radius: 4px;
    gap: 10px;
    box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    box-sizing: border-box;
  }

  > form > button {
    position: absolute;
    top: 10px;
    right: -30px;
    background: none;
    margin: 0px;
  }

  > form > button .close--Modal {
    width: 20px;
    height: 20px;
  }

  > form > p {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 20px;
  }

  form > p > input {
    border-radius: 4px;
    width: 90%;
    padding: 10px;
    border: solid 1px var(--color-gray-3);
    font-size: 15px;
    box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
  }

  form > p > button {
    display: flex;
    width: 70px;
    height: 30px;
    align-items: center;
    justify-content: center;
    background: var(--color-brand-1);
    color: var(--color-gray-10);
    padding: 20px;
    box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
  }
`;

export const ModalSale = styled.div`
  position: fixed;
  padding-top: 20vh;
  width: 100vw;
  min-height: 100vh;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  z-index: 2;
  overflow-y: scroll;

  > form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    /* align-items: center; */
    justify-content: center;
    width: 95%;
    padding: 40px;
    max-width: 550px;
    background-color: white;
    position: absolute;
    border-radius: 4px;
    box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    box-sizing: border-box;
  }

  form > h2 {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  > form > p > span {
    font-weight: bold;
  }

  > form > div {
    width: 100%;
    justify-content: center;
    align-items: center;
    gap: 10%;
    display: flex;
    height: 60px;
  }

  > form > div > button {
    padding: 20px;
    width: 150px;
    height: 40px;
  }
`;
