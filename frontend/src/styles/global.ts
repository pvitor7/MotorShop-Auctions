import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    outline: 0;
    border: 0;
    list-style: none;
    font-family: "Lexend", sans-serif;
}
:root{
    --color-white-fixed: #FFFFFF;
    --color-brand-1: #4529E6;
    --color-brand-2: #5126EA;
    --color-brand-3: #B0A6F0;
    --color-brand-4: #EDEAFD;
    --color-grey-0:  #0B0D0D;
    --color-grey-1:  #212529;
    --color-gray-2:  #495057;
    --color-gray-3:  #868E96;
    --color-gray-4:  #ADB5BD;
    --color-gray-5:  #CED4DA;
    --color-gray-6:  #DEE2E6;
    --color-gray-7:  #E9ECEF;
    --color-gray-8:  #F1F3F5;
    --color-gray-9:  #F8F9FA;
    --color-gray-10: #FDFDFD;
    --color-feedback-alert1: #CD2B31;
    --color-feedback-alert2: #FDD8D8;
    --color-feedback-alert3: #FFE5E5;
    --color-feeback-sucess1: #18794E;
    --color-feeback-sucess2: #CCEBD7;
    --color-feeback-sucess3: #DDF3E4;
    --color-random-1:  #E34D8C;
    --color-random-2:  #C04277;
    --color-random-3:  #7D2A4D;
    --color-random-4:  #7000FF;
    --color-random-5:  #6200E3;
    --color-random-6:  #36007D;
    --color-random-7:  #349974;
    --color-random-8:  #2A7D5F;
    --color-random-9:  #153D2E;
    --color-random-10: #6100FF;
    --color-random-11: #5700E3;
    --color-random-12: #30007D;

    --font-heading-1-700: 700;
    --font-heading-2-600: 600;
    --font-heading-3-600: 600; 
    --font-heading-3-500: 500;
    --font-heading-4-600: 600;
    --font-heading-5-600: 600;
    --font-heading-5-500: 500;
    --font-heading-6-600: 600;
    --font-heading-6-500: 500;
    --font-heading-7-600: 600;
    --font-heading-7-500: 500;

    --font-body-1-400: 400;
    --font-body-1-600: 600;
    --font-body-2-400: 400;
    --font-body-2-500: 500;

    --max-width: 1440px;
    --min-width: 360px;

}

input, textarea{

    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: var(--font-body-2-500);
    font-size: 28px;
}

button{

    width: 121px;
    height: 0px;

    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: var(--font-body-1-600);
    font-size: 16px;
    line-height: 0px;

    cursor: pointer;
}
button:hover{
    
}

`;

export default GlobalStyle;