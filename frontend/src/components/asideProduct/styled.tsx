import styled from "styled-components";
import { motion } from "framer-motion";

export const AsideStyled = styled(motion.section)`
  @media (min-width: 320px) {
    display: flex;
    flex-direction: column;
    width: 100vw;
    max-width: 760px;
    gap: 30px;
    align-items: center;
  }

  @media (min-width: 740px) {
    max-width: 440px;
  }

  @keyframes spinner {
    to {
      transform: rotate(360deg);
    }
  }

  .loading-photo {
    width: 30%;
    height: auto;
    color: var(--color-brand-2);
    animation: spinner infinite 1s linear;
  }
`;

export const ContainerGalery = styled(motion.div)`
  @media (min-width: 320px) {
    display: flex;
    justify-content: center;
    gap: 10px;
    flex-wrap: wrap;
    background: var(--color-gray-10);
    width: 100%;
    max-width: 751px;
    padding: 30px 15px;
    border-radius: 4px;

    .loading-photo {
      padding: 10%;
    }

    h3 {
      display: flex;
      align-items: center;
      width: 90%;
      justify-content: space-between;
    }

    h3 > button {
      height: 100%;
      background: none;
      width: 20px;
    }

    ul {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      width: 100%;
    }

@keyframes img-animation {
  
  0%{
    transform: translate;
  }

  100%{
    
  }
  
  to {
      transform: rotate(360deg);
    }
  }


    img {
      width: 30%;
      margin: 20px 0px;
    }
  }
`;

export const ContainerOwnerProduct = styled(motion.div)`
  @media (min-width: 320px) {
    display: flex;
    flex-direction: column;
    background: var(--color-gray-10);
    width: 100%;
    max-width: 440px;
    align-items: center;
    height: auto;
    border-radius: 5px;
    padding: 40px 20px;
    gap: 30px;

    .loading-photo {
      padding: 5%;
    }

    div > .name-user {
      display: none;
    }

    div > .icon-user {
      width: 70px;
      height: 70px;
      font-size: 25px;
    }

    h4 {
      color: #000000;
      font-family: "Lexend", sans-serif;
      font-style: normal;
      font-weight: 600;
      font-size: 20px;
      line-height: 25px;
      display: flex;
      align-items: center;
      gap: 10px;
    }

    p {
      display: flex;
      width: 90%;
      color: #495057;
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
