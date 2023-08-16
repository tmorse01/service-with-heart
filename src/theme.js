// theme.js
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    tealPrimary: {
      50: "#E6FFFA",
      100: "#B2F5EA",
      200: "#81E6D9",
      300: "#4FD1C5",
      400: "#38B2AC",
      500: "#319795", // Teal as the primary color
      600: "#2C7A7B",
      700: "#285E61",
      800: "#234E52",
      900: "#1D4044",
    },
    whiteSecondary: "#FFFFFF", // White as the secondary color
  },
  fonts: {
    body: "Arial, sans-serif",
    heading: "Helvetica, sans-serif",
  },
  // Add more styles and settings as needed
});

export default theme;
