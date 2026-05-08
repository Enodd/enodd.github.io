import { definePreset } from "@primeuix/themes";
import Aura from "@primeuix/themes/aura";

export const AppPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: "#eddcd7",
      100: "#dab9b0",
      200: "#c89788",
      300: "#b57461",
      400: "#a35139",
      500: "#a35139",
      600: "#82412e",
      700: "#623122",
      800: "#412017",
      900: "#21100b",
      950: "#21100b",
    },

    secondary: {
      50: "#d5d8db",
      100: "#abb1b8",
      200: "#808994",
      300: "#566271",
      400: "#2c3b4d",
      500: "#2c3b4d",
      600: "#232f3e",
      700: "#1a232e",
      800: "#12181f",
      900: "#090c0f",
      950: "#090c0f",
    },

    surface: {
      50: "#f4f3ef",
      100: "#e9e6e0",
      200: "#dfdad0",
      300: "#d4cdc1",
      400: "#c9c1b1",
      500: "#c9c1b1",
      600: "#a19a8e",
      700: "#79746a",
      800: "#504d47",
      900: "#282723",
      950: "#282723",
    },

    colorScheme: {
      light: {
        primary: {
          color: "#a35139",
          contrastColor: "#ffffff",
          hoverColor: "#82412e",
          activeColor: "#623122",
        },

        secondary: {
          color: "#2c3b4d",
          contrastColor: "#ffffff",
        },

        highlight: {
          background: "#eddcd7",
          color: "#412017",
        },

        surface: {
          ground: "#c9c1b1",
          section: "#d4cdc1",
          card: "#f4f3ef",
          overlay: "#ffffff",

          border: "#dfdad0",
          hover: "#e9e6e0",
        },

        text: {
          color: "#12181f",
          hoverColor: "#090c0f",
          mutedColor: "#566271",
        },
      },

      dark: {
        primary: {
          color: "#ffb162",
          contrastColor: "#1b2632",
          hoverColor: "#ffc181",
          activeColor: "#cc8e4e",
        },

        secondary: {
          color: "#eee9df",
          contrastColor: "#1b2632",
        },

        highlight: {
          background: "#332314",
          color: "#ffd0a1",
        },

        surface: {
          ground: "#1b2632",
          section: "#161e28",
          card: "#10171e",
          overlay: "#161e28",

          border: "#49515b",
          hover: "#232f3e",
        },

        text: {
          color: "#eee9df",
          hoverColor: "#ffffff",
          mutedColor: "#bebab2",
        },
      },
    },
  },
});
