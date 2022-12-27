import styled from "styled-components";

export const ListAuctionStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 30px;

  > div {
    display: flex;
    align-items: center;
  }

  div > ul {
    display: flex;
    overflow-x: auto;
    scroll-behavior: smooth;
    width: 100%;
    gap: 20px;
    padding: 10px;
  }

  div > ul::-webkit-scrollbar {
    display: none;
  }

  h2 {
    height: 10%;
    margin: 20px 60px;
  }

  > div > button {
    display: flex;
    width: 50px;
    padding: 0;
    align-items: center;
    background: none;
    position: static;
  }

  div > button > .arrow{
    width: 50px;
    height: 50px;
  }

`;
