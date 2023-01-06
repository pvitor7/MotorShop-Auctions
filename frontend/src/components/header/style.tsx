import styled from "styled-components";
import { motion } from 'framer-motion';


export const HeaderStyled = styled.header`
  @media (min-width: 320px) {
    display: flex;
    position: fixed;
    left: 0px;
    top: 0px;
    align-items: center;
    justify-content: space-between;
    min-height: 80px;
    width: 100vw;
    background-color: var(--color-white-fixed);
    border-bottom: 1.5px solid var(--color-gray-5);

    .div-line {
      display: none;
    }

    .logo-MotorsShop {
      width: 10%;
      min-width: 120px;
      margin: 20px 10px 20px 20px;
    }

    .nav-menu {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 15%;
      width: 35%;
      height: auto;
    }

    .menu-mobile-icon{
      display: flex;
      align-items: center;
      height: 100%;
      background: none;
      border-radius: 50%;
    }

    .nav-menu > div{
      display: flex;
      align-items: center;
      justify-content: space-around;
      width: 80%;
      height: 100%;
    }

    .nav-menu > div > button {
      width: auto;
      height: 100%;
      box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
    }

    .nav-menu > div > button > div > .name-user {
      display: none;
    }

    .icon-Menu {
      width: 30px;
    }

    .nav--menu-desktop {
      display: none;
    }

    .initials {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 20px;
      background-color: #4529e6;
      color: var(--color-gray-10);
      border-radius: 50%;
      padding: 10px;
    }

    .name-profile {
      color: #000000;
      display: flex;
      justify-content: center;
      flex-wrap: nowrap;
      font-family: "Lexend", sans-serif;
      font-style: normal;
      font-weight: 600;
      line-height: 25px;
      display: flex;
      width: 50%;
      align-items: center;
      gap: 10px;
    }

    @keyframes spinner {
    to {
      transform: rotate(360deg);
    }
  }

  .loading-user {
    width: 20%;
    height: auto;
    color: var(--color-brand-2);
    animation: spinner infinite 0.8s linear;
  }
  
}


  @media (min-width: 640px) {
    font-size: 16px;
    #div-line {
      height: 80px;
      border: 1px solid var(--color-gray-6);
    }

    .nav-menu {
      display: none;
    }

    .nav--menu-desktop {
      margin-right: 5%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      width: 50%;
      max-width: 600px;
      gap: 10px;
    }

    .nav--menu-desktop-button {
      width: 50%;
      box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
    }

    .nav--login-register-desktop {
      display: flex;
      justify-content: space-around;
      align-items: center;
      width: 50%;
      min-width: 200px;
      gap: 10px;
    }

    .nav--login-register-desktop > form{
      display: flex;
      width: 100%;
      height: 100%;
      justify-content: space-around;
      align-items: center;
      gap: 5%;
    }

    .nav--login-register-desktop > div > div {
      gap: 2vw;
    }

    .nav--menu-desktop-h4 {
      display: flex;
      justify-content: center;
      min-width: 50%;
      color: var(--color-gray-2);
      box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
    }

    .nav--menu-desktop-button-register {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 50px;
      padding: 0px 10px;
      border: 1.5px solid var(--color-gray-4);
      border-radius: 4px;
      background-color: var(--color-white-fixed);
    }
  }

  @media (min-width: 920px) {
    padding: 0 50px;
    .nav--login-register-desktop {
      min-width: 250px;
    }

    .nav--menu-desktop-button {
      font-size: 20px;
    }
    .nav--menu-desktop {
      font-size: 20px;
    }
    .nav--menu-desktop-button-register {
      font-size: 20px;
    }
  }

  @media (min-width: 1200px) {
    .nav--menu-desktop-button-register {
      width: 50%;
    }
  }
`;


export const MenuProfileStyled = styled(motion.div)`
  @media (min-width: 320px) {
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    background: var(--color-white-fixed);
    width: 25%;
    min-width: 200px;
    max-width: 280px;
    height: 252px;
    border-radius: 4px;
    right: 0;
    top: -400px;
    margin-top: 80px;
    margin-right: 20px;
    box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);

    div{
      width: 80%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
    }

    button {
      display: flex;
      align-items: center;
      width: 80%;
      font-family: "Inter", sans-serif;
      color: var(--color-gray-2);
      font-weight: 400;
    }
  }
`;


export const MenuStyled = styled(motion.div)`
  @media (min-width: 320px) {
    display: flex;
    position: fixed;
    flex-direction: column;
    width: 100%;
    height: auto;
    box-shadow: 0px 50px 55px var(--color-grey-1);
    background-color: var(--color-white-fixed);
    margin-top: 80px;
    top: -600px;

    .nav--menu-mobile {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      width: 100%;
      background-color: var(--color-white-fixed);
      padding: 20px;
    }

    .nav--menu-mobile > .nav--menu-mobile-button {
      display: flex;
      align-items: center;
      width: 100%;
      height: 30px;
      margin: 20px;
      background: none;
      color: var(--color-gray-2);
    }

    .nav--login-register-mobile {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      width: 100%;
      height: 170px;
      background-color: var(--color-white-fixed);
      border-top: 1.5px solid var(--color-gray-4);
      padding: 20px;
    }
    .nav--menu-mobile-h4 {
      flex-direction: column;
      width: 90%;
      max-width: 341px;
      margin: 20px;
      color: var(--color-gray-2);
      background-color: var(--color-white-fixed);
      box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
    }

    .mobile-button-register {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 12px 28px;
      margin: 20px;
      gap: 10px;
      width: 90%;
      max-width: 341px;
      min-height: 40px;
      border: 1.5px solid var(--color-gray-4);
      border-radius: 4px;
      background-color: var(--color-white-fixed);
    }

    .user-logged-mobile {
      padding: 12px 28px;
      display: flex;
      background-color: var(--color-white-fixed);
    }

    .initials {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 20px;
      background-color: #4529e6;
      color: var(--color-gray-10);
      border-radius: 50%;
      padding: 10px;
    }

    .name-profile {
      color: #000000;
      display: flex;
      justify-content: center;
      flex-wrap: nowrap;
      font-family: "Lexend", sans-serif;
      font-style: normal;
      font-weight: 600;
      line-height: 25px;
      display: flex;
      width: 100px;
      align-items: center;
      gap: 10px;
    }
  }

  @media (min-width: 640px) {
    display: none;
  }
`;

