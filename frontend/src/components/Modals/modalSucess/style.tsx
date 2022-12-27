import styled from "styled-components";

export const ContainerStyled = styled.section`

    .containerModal {

        position: absolute;
        width: 100vw;
        height: 100vh;
        position: fixed;
        top: 0;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        z-index: 2;
    }

    .containerModal .modal {

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 95%;
        max-width: 520px;
        height: 70%;
        max-height: 300px;
        background-color: white;
        position: absolute;
        border-radius: 4px;
        padding: 5px;
        margin-top: 90px;
        box-shadow: 0px 4px 40px -10px 
        rgba(0, 0, 0, 0.25);
        border-radius: 4px;
        box-sizing: border-box;

    }

    .containerModal .modal button.removedModal{
    
        color: #868E96;
        background: none;
        border: none;
        font-family: "Nunito", sans-serif;
        font-style: normal;
        font-size: 20px;
    
        width: 11px;
        height: 26px;
        top: 8px;
        right: 30px;
        cursor: pointer;
    }

    > .hidden {
        display: none;
    }

    .modalHeader {
    
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;
        padding: 12px;
        width: 100%;
        height: 50px;
        box-sizing: border-box;
        background: #FFFFFF;
        border-radius: 4px 4px 0px 0px;
    
    }

    .modalHeader > h1 {

        min-width: 150px;
        
        display: flex;
        
        font-family: "Inter", sans-serif;
        font-size: 24px;
        color: #212529;
    }

    .modalBody {

        width: 90%;
        height: 100%;

        display: flex;
        flex-direction: column;
        justify-content: space-around;
        background: #FFFFFF;
        border-radius: 4px 4px 0px 0px;
        box-sizing: border-box;
        
    }

    .modalBody > button{
            display: flex;
            width: 160px;
            padding: 23px;
        }

    ::placeholder {
        color: #F8F9FA;
    }

`;
