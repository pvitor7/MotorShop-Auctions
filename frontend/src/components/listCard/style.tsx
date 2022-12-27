import styled from "styled-components";

export const ListStyle = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  padding: 10px;
  gap: 20px;

  > div {
    display: flex;
    align-items: center;
  }

  > div > ul {
    display: flex;
    overflow-x: auto;
    scroll-behavior: smooth;
    width: 100%;
    gap: 30px;
    padding: 10px;
  }

  > div > ul::-webkit-scrollbar {
    display: none;
  }

  h2 {
    margin: 20px 60px;
  }

  > div > button {
    display: flex;
    width: 50px;
    height: 50px;
    align-items: center;
    background: none;
  }

  > div > button > .arrow {
    width: 50px;
    height: 50px;
  }
`;
