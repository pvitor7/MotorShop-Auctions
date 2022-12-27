import styled from "styled-components";

const UserIconStyle = styled.div`
  display: flex;
  gap: 10px;

  .icon-user {
    color: ${(props) => (props.color ? props.color : "#FFFFFF")};
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.theme && props.theme};
    border-radius: 50%;
    padding: 10px;
    width: 45px;
    height: 45px;
  }

  .name-user {
    display: flex;
    align-items: center;
    color: ${(props) => props.color && props.color};
  }
`;

export { UserIconStyle };
