import { createGlobalStyle } from 'styled-components';
import { EnoddTheme } from './enoddTheme';
import BackgroundImage from '../images/BackgroundImage.svg';


const GlobalCss = createGlobalStyle<EnoddTheme>`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: ${theme => theme.font};
        font-size: 1rem;
        
    }
    html {
        background-color: ${theme => theme.palette.secondary.dark};
    }
    body{
        background-image: url(${BackgroundImage});
        background-size: 100%;
        background-attachment: fixed;
    }
    button {
        border-radius: 1rem;
        border: none;
    }
    h1{
        font-size: ${theme => theme.fontSizes.regularSizes.xl};
    }
    h2{
        font-size: ${theme => theme.fontSizes.coreSizes.h2};
    }
    h3{
        font-size: ${theme => theme.fontSizes.coreSizes.h3};
    }
    h4{
        font-size: ${theme => theme.fontSizes.coreSizes.h4};
    }
    h5{
        font-size: ${theme => theme.fontSizes.coreSizes.h5};
    }
    ::-webkit-scrollbar {
        width: 8px;
    }
    ::-webkit-scrollbar-track {
        background-color: ${theme => theme.palette.secondary.dark};
    }
    ::-webkit-scrollbar-thumb {
        background-color: ${theme => theme.palette.primary.main};
        border-radius: 1vw;
    } 
`;
export default GlobalCss;