import styled from "styled-components";

const InputStyled = styled.div`
    width: 100%;
    font-size: 18px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    
    label{
        color: var(--color-grey-0);
        font-size: 14px; 
        overflow: hidden;
   }

   ::placeholder{
    color: var(--color-grey-0);
   }
`

export {InputStyled}
