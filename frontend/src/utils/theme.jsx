import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";

export const tokens = {
  primary: {
    10: "#002110",
    20: "#00391f",
    25: "#004527",
    30: "#00522f",
    35: "#005f38",
    40: "#006d41",
    50: "#1a8855",
    60: "#3da36d",
    70: "#5bbe86",
    80: "#77da9f",
    90: "#93f7ba",
    95: "#c1ffd4",
    98: "#e9ffec",
    99: "#f5fff4",
  },
  secondary: {
    10: "#0c1f14",
    20: "#213528",
    25: "#2c4032",
    30: "#374b3d",
    35: "#435749",
    40: "#4e6354",
    50: "#677c6c",
    60: "#809685",
    70: "#9ab19f",
    80: "#b5ccba",
    90: "#d1e8d5",
    95: "#dff7e3",
    98: "#e9ffec",
    99: "#f5fff4",
  },
  tertiary: {
    10: "#001f27",
    20: "#033541",
    25: "#14414c",
    30: "#224c58",
    35: "#2e5864",
    40: "#3b6470",
    50: "#547d8a",
    60: "#6e97a4",
    70: "#88b2bf",
    80: "#a3cddb",
    90: "#bfe9f8",
    95: "#daf5ff",
    98: "#f1fbff",
    99: "#f9fdff",
  },
  neutral: {
    10: "#191c1a",
    20: "#2e312e",
    25: "#393c39",
    30: "#444744",
    35: "#505350",
    40: "#5c5f5c",
    50: "#757874",
    60: "#8f918d",
    70: "#aaaca8",
    80: "#c5c7c3",
    90: "#e1e3de",
    95: "#f0f1ec",
    98: "#f8faf5",
    99: "#fbfdf8",
  },
  neutral_variant: {
    10: "#161d18",
    20: "#2a322c",
    25: "#353d37",
    30: "#414942",
    35: "#4c544e",
    40: "#586059",
    50: "#717972",
    60: "#8a938b",
    70: "#a5ada5",
    80: "#c0c9c0",
    90: "#dce5dc",
    95: "#ebf3ea",
    98: "#f3fcf2",
    99: "#f6fff5",
  },
  error: {
    10: "#410002",
    20: "#690005",
    25: "#7e0007",
    30: "#93000a",
    35: "#a80710",
    40: "#ba1a1a",
    50: "#de3730",
    60: "#ff5449",
    70: "#ff897d",
    80: "#ffb4ab",
    90: "#ffdad6",
    95: "#ffedea",
    98: "#fff8f7",
    99: "#fffbff",
  },
  info: {
    10: "#001946",
    20: "#002c70",
    25: "#003687",
    30: "#00419e",
    35: "#004cb6",
    40: "#0057ce",
    50: "#0e6efd",
    60: "#588cff",
    70: "#87a9ff",
    80: "#b1c5ff",
    90: "#dae2ff",
    95: "#eef0ff",
    98: "#faf8ff",
    99: "#fefbff",
  },
  warning: {
    10: "#261a00",
    20: "#3f2e00",
    25: "#4d3800",
    30: "#5b4300",
    35: "#6a4e00",
    40: "#785900",
    50: "#977100",
    60: "#b78a00",
    70: "#d8a300",
    80: "#fabd00",
    90: "#ffdf9e",
    95: "#ffefd4",
    98: "#fff8f2",
    99: "#fffbff",
  },
  common: {
    white: "#ffffff",
    black: "#000000",
  },
  surface: {
    99: "#fbfdf8",
    95: "#eef6ef",
    80: "#e7f1e9",
    50: "#dfede4",
    30: "#ddece2",
    20: "#d8e9de",
  },
};

// export const themeSettings = (mode) => {
//   const colors = tokens(mode);
//   return {
//     palette: {
//       mode: mode,
//       primary: {
//         light: colors.primary[90],
//         main: colors.primary[50],
//         dark: colors.primary[30],
//       },
//       secondary: {
//         light: colors.secondary[90],
//         main: colors.secondary[40],
//         dark: colors.secondary[10],
//       },
//       neutral: {
//         light: colors.neutral[90],
//         main: colors.neutral[70],
//         dark: colors.neutral[50],
//       },
//       error: {
//         light: colors.error[90],
//         main: colors.error[40],
//         dark: colors.error[10],
//       },
//       info: {
//         light: colors.info[90],
//         main: colors.info[40],
//         dark: colors.info[10],
//       },
//       warning: {
//         light: colors.warning[90],
//         main: colors.warning[40],
//         dark: colors.warning[10],
//       },
//       success: {
//         light: colors.primary[90],
//         main: colors.primary[40],
//         dark: colors.primary[10],
//       },
//       common: {
//         black: colors.neutral[10],
//         white: colors.common.white,
//       },
//       text: {
//         primary: colors.neutral[10],
//         secondary: colors.neutral[30],
//         disabled: colors.neutral[70],
//       },
//       background: {
//         paper: colors.neutral[99],
//         default: colors.neutral[90],
//       },
//     },
//     typography: {
//       fontSize: 14,
//       fontFamily: [
//         "Figtree",
//         "ui-sans-serif",
//         "system-ui",
//         "-apple-system",
//         "BlinkMacSystemFont",
//         "Segoe UI",
//         "Roboto",
//         "Helvetica Neue",
//         "Arial",
//         "Noto Sans",
//         "sans-serif",
//         "Apple Color Emoji",
//         "Segoe UI Emoji",
//         "Segoe UI Symbol",
//         "Noto Color Emoji",
//       ].join(","),
//     },
//   };
// };

// export const ColorModeContext = createContext({
//   toggleColorMode: () => {},
// });

// export const useMode = () => {
//   const [mode, setMode] = useState("light");
//   const colorMode = useMemo(
//     () => ({
//       toggleColorMode: () => {
//         setMode((prev) => (prev === "dark" ? "light" : "dark"));
//       },
//     }),
//     []
//   );

//   const theme = useMemo(() => createTheme(themeSettings("light")), []);

//   return [theme, colorMode];
// };

export const theme = createTheme({
  palette: {
    primary: {
      light: tokens.primary[90],
      main: tokens.primary[50],
      dark: tokens.primary[30],
    },
    secondary: {
      light: tokens.secondary[90],
      main: tokens.secondary[40],
      dark: tokens.secondary[10],
    },
    neutral: {
      light: tokens.neutral[90],
      main: tokens.neutral[70],
      dark: tokens.neutral[50],
    },
    error: {
      light: tokens.error[90],
      main: tokens.error[40],
      dark: tokens.error[10],
    },
    info: {
      light: tokens.info[90],
      main: tokens.info[40],
      dark: tokens.info[10],
    },
    warning: {
      light: tokens.warning[90],
      main: tokens.warning[40],
      dark: tokens.warning[10],
    },
    success: {
      light: tokens.primary[90],
      main: tokens.primary[40],
      dark: tokens.primary[10],
    },
    common: {
      black: tokens.neutral[10],
      white: tokens.common.white,
    },
    text: {
      primary: tokens.neutral[10],
      secondary: tokens.neutral[30],
      disabled: tokens.neutral[70],
    },
    background: {
      paper: tokens.neutral[99],
      default: tokens.neutral[90],
    },
  },
  typography: {
    fontSize: 14,
    fontFamily: [
      "Figtree",
      "ui-sans-serif",
      "system-ui",
      "-apple-system",
      "BlinkMacSystemFont",
      "Segoe UI",
      "Roboto",
      "Helvetica Neue",
      "Arial",
      "Noto Sans",
      "sans-serif",
      "Apple Color Emoji",
      "Segoe UI Emoji",
      "Segoe UI Symbol",
      "Noto Color Emoji",
    ].join(","),
  },
});
