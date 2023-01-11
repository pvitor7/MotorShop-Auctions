import styled from "styled-components";

export const ContainerStyled = styled.section`

.containerModal {
    
        position: fixed;
        padding-top: 30px;
        width: 100vw;
        min-height: 100vh;
        top: 0;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        z-index: 2;
        overflow-y: scroll;
        
    }
    
    .containerModal .modal {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 95%;
        max-width: 450px;
        background-color: white;
        position: absolute;
        border-radius: 4px;
        gap: 10px;

        box-shadow: 0px 4px 40px -10px 
        rgba(0, 0, 0, 0.25);
        border-radius: 4px;
        box-sizing: border-box;

    }

    .containerModal .modal button.removedModal
    {
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
        padding: 12px 30px;

        width: 100%;
        height: 50px;
        box-sizing: border-box;

        background: #FFFFFF;
        border-radius: 4px 4px 0px 0px;
    
    }

    .modalHeader > h1 {

        min-width: 150px;
        display: flex;
        align-items: center;
        

        font-family: "Inter", sans-serif;
        font-size: 24px;
        color: #212529;

    }
    
    form{
        width: 90%;
        min-height: 80%;
        padding: 0;
    }

    .modalBody {

        width: 100%;
        
        gap: 25px;
        padding: 30px;

        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;

        background: #FFFFFF;
        border-radius: 4px 4px 0px 0px;
        box-sizing: border-box;
        
        div{
            width: 100%;
        }
        
        button{
            width: 100%;
            padding: 23px;
        }
        
        label{
            display: flex;
            width: 95%;
            text-decoration: none;
            font-size: 15px;
        }
        
        .label--register{
            justify-content: center;
            color: var(--color-gray-2);
        }
        
        p{
            font-size: 16px;
            width: 100%;
        }
        
        a{
            font-size: 15px;
            display: flex;
            justify-content: flex-end;
            width: 90%;
            text-decoration: none;
        }
        
        .div--field{
            width: 100%;
            gap: 15px;
            display: flex;
        }

        .div--field > div{
            min-width: 30%;
        }

        button{
            text-transform: capitalize;
            font-weight: bold;
        }
    }

    ::placeholder {
        color: #F8F9FA;
    }

`;
