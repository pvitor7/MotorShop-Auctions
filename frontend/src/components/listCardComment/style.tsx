import styled from "styled-components";

export const ListCommentsStyle = styled.div`

    width: 751px;
    height: 557px;
    margin-top: 30px;
    padding: 36px 44px;
    gap: 24px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background: #FDFDFD;
    border-radius: 4px;

    ul{
        display: flex;
        flex-direction: column;
        height: 420px;
        overflow-y: scroll;
        gap: 20px;
    }

    h2{
        height: 10%;
        margin: 20px;

        font-family: 'Lexend';
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 25px;
        color: #212529;
    }

`


export const LiCard = styled.li`
    display: flex;
    flex-direction: column;
    width: 90%;
    box-sizing: content-box;
    padding: 30px;
    gap: 30px;
    font-family: 'Inter', sans-serif;

    
    p {
        color: #495057;
        display: flex;
        text-align: justify;
        width: 100%;
        margin: 30px;
        font-size: 15px;
        
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 24px;
    }
`
