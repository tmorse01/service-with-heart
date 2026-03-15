import {
  createSystem,
  defaultConfig,
  defineConfig,
} from "@chakra-ui/react";

const customThemeConfig = defineConfig({
  theme: {
    tokens: {
      fonts: {
        body: { value: '"Source Sans 3", sans-serif' },
        heading: { value: '"Source Sans 3", sans-serif' },
      },
      letterSpacings: {
        nav: { value: "0.05em" },
      },
      /* Generous font sizes for older users and mobile */
      fontSizes: {
        xs: { value: "0.875rem" },
        sm: { value: "1rem" },
        md: { value: "1.125rem" },
        lg: { value: "1.25rem" },
        xl: { value: "1.5rem" },
        "2xl": { value: "1.875rem" },
        "3xl": { value: "2.25rem" },
        "4xl": { value: "3rem" },
      },
      colors: {
        tealPrimary: {
          50: { value: "#E6FFFA" },
          100: { value: "#B2F5EA" },
          200: { value: "#81E6D9" },
          300: { value: "#4FD1C5" },
          400: { value: "#38B2AC" },
          500: { value: "#319795" },
          600: { value: "#2C7A7B" },
          700: { value: "#285E61" },
          800: { value: "#234E52" },
          900: { value: "#1D4044" },
          950: { value: "#0F2829" },
        },
      },
    },
    semanticTokens: {
      colors: {
        accent: {
          solid: {
            value: { _light: "{colors.tealPrimary.600}", _dark: "{colors.tealPrimary.400}" },
          },
          muted: {
            value: { _light: "{colors.tealPrimary.500}", _dark: "{colors.tealPrimary.300}" },
          },
        },
        tealPrimary: {
          contrast: {
            value: { _light: "white", _dark: "white" },
          },
          fg: {
            value: { _light: "{colors.tealPrimary.700}", _dark: "{colors.tealPrimary.300}" },
          },
          subtle: {
            value: { _light: "{colors.tealPrimary.100}", _dark: "{colors.tealPrimary.900}" },
          },
          muted: {
            value: { _light: "{colors.tealPrimary.200}", _dark: "{colors.tealPrimary.800}" },
          },
          emphasized: {
            value: { _light: "{colors.tealPrimary.300}", _dark: "{colors.tealPrimary.700}" },
          },
          solid: {
            value: { _light: "{colors.tealPrimary.600}", _dark: "{colors.tealPrimary.600}" },
          },
          focusRing: {
            value: { _light: "{colors.tealPrimary.500}", _dark: "{colors.tealPrimary.500}" },
          },
          border: {
            value: { _light: "{colors.tealPrimary.500}", _dark: "{colors.tealPrimary.400}" },
          },
        },
      },
    },
  },
});

export const system = createSystem(defaultConfig, customThemeConfig);
