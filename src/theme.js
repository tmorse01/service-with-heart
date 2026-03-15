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
  semanticTokens: {
    colors: {
      // Background (light theme)
      "bg.default": { default: "white", _dark: "gray.950" },
      "bg.subtle": { default: "gray.50", _dark: "gray.950" },
      "bg.muted": { default: "gray.100", _dark: "gray.900" },
      "bg.emphasized": { default: "gray.200", _dark: "gray.800" },
      // Text / foreground
      "fg.default": { default: "gray.900", _dark: "gray.50" },
      "fg.muted": { default: "gray.600", _dark: "gray.400" },
      "fg.subtle": { default: "gray.500", _dark: "gray.500" },
      "fg.inverted": { default: "gray.50", _dark: "gray.900" },
      // Border
      "border.default": { default: "gray.200", _dark: "gray.800" },
      "border.muted": { default: "gray.100", _dark: "gray.900" },
      // Accent (teal) for buttons, links, active states
      "accent.solid": { default: "tealPrimary.600", _dark: "tealPrimary.400" },
      "accent.muted": { default: "tealPrimary.500", _dark: "tealPrimary.300" },
    },
  },
});

export default theme;
