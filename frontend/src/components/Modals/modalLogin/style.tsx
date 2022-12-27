import styled from "styled-components";
import { motion } from 'framer-motion';

export const ContainerStyled = styled(motion.div)`

    .containerModal {

        position: absolute;
        width: 100vw;
        height: 100vh;
        position: fixed;
        top: 0;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 2;

    }

    .containerModal .modal {

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 95%;
        max-width: 450px;
        height: 80%;
        max-height: 600px;
        background-color: white;
        position: absolute;
        border-radius: 4px;
        padding: 5px;

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
        height: 80%;
        padding: 0;
    }

    .modalBody {

        width: 100%;
        height: 100%;

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
        
        a{
            font-size: 15px;
            display: flex;
            justify-content: flex-end;
            width: 90%;
            text-decoration: none;
        }


        button{
            text-transform: capitalize;
            font-size: 16px;
            font-weight: bold;
        }
    }

    ::placeholder {
        color: #F8F9FA;
    }

`;
