import { createGlobalStyle } from "styled-components";
import { EnoddTheme } from "./enoddTheme";
import BackgroundImage from '../images/BackgroundImage.svg';


const GlobalCss = createGlobalStyle<EnoddTheme>`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: ${theme => theme.font};
    }
    body{
        background-image: url(${BackgroundImage});
        background-size: cover;
    }
    button {
        border-radius: 1rem;
        border: none;
    }
`;
export default GlobalCss;