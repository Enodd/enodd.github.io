import { DefaultTheme } from "styled-components";
export const theme: DefaultTheme = {
  colors: {
    highlight: {
      primary: "#F5846C",
      secondary: "#F0B186",
    },
    background: {
      primary: "#76A690",
      secondary: "#96ba9e",
      dark: "#195856"
    },
    disabled: "#868686",
    gradients: {
      primary: "linear-gradient(45deg,#f5846c, #f0b186)",
      secondary: "linear-gradient(45def, #195856, #96ba93)"
    }
  },
  fonts: {
    main: "Montserrat",
    alternative: "Source Sans Pro",
  },
  pictures: {
    heroPicture: 'url("../../images/keyboardHeroImage.jpg")',
    aboutPicture: 'url("../../images/mountains.jpg")',
    authorPicture: 'url("../../images/enoddavatar.png)',
  },
};

