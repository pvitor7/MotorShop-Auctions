import styled from "styled-components";
import { motion } from "framer-motion";

const AuctionCardStyle = styled(motion.div)`
  @media (min-width: 320px) {
    min-width: 312px;
    max-width: 412px;
    min-height: 490px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-top: 10px;
    background-image: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.29) 0%,
        var(--color-grey-0) 100%
      ),
      url(${(props) => props.theme});
    background-repeat: no-repeat;
    background-position-x: center;
    background-position-y: center;
    border-radius: 4px 4px 0px 0px;
    color: var(--color-white-fixed);
    background-size: cover;

    > label > img {
      width: 20px;
      color: var(--color-grey-0);
    }

    > label {
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--color-grey-1);
      margin: 10px 15px;
      background-color: var(--color-white-fixed);
      width: 150px;
      height: 30px;
      gap: 10px;
      border-radius: 32px;
      font-weight: var(--font-heading-1-700);
      padding: 5px;
    }

    h3 {
      font-weight: var(--font-heading-3-600);
      font-size: 22px;
      margin: 50px 15px 10px 15px;
    }

    >div > div {
      display: flex;
      width: 90%;
      gap: 10px;
      margin: 10px 15px;
    }

    p {
      display: flex;
      flex-wrap: wrap;
      width: 85%;
      font-size: 15px;
      font-weight: var(--font-heading-3-500);
      margin: 10px 15px;
    }
    
    .p--descriptionCar{
      height: 50%;
    }

    p > div{
      gap: 0;
    }

    p > div > .icon-user{
      width: 70px;
    }

    div > span {
      font-size: 16px;
      margin: 15px;
    }

    button {
      display: flex;
      align-items: center;
      width: 100%;
      padding: 36px 5%;
      min-height: 50px;
      color: var(--color-white-fixed);
      background: var(--color-brand-1);
      font-weight: var(--font-body-2-400);
      margin-top: 10px;
    }

    button:hover {
      background: var(--color-brand-2);
    }

    button > p {
        font-size: 18px;
    }

  }

  @media (min-width: 640px) {
    min-height: 360px;
    min-width: 735px;

    .auction-time,
    h3,
    p,
    .tagets {
      margin-left: 30px;
    }

    > div {
      display: flex;
      width: 100%;
      justify-content: space-between;
    }

    .tagets {
      width: 30%;
    }

    div > span {
      width: 20%;
    }
  }
`;

export { AuctionCardStyle };
