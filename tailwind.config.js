/** @format */

const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,tsx,jsx}",
    "./components/**/*.{js,ts,tsx,jsx}",
    "./layouts/**/*.{js,ts,tsx,jsx}",
    "./lib/**/*.{js,ts,tsx,jsx}",
  ],
  darkMode: "media",
  // darkMode: false,
  theme: {
    extend: {
      spacing: {
        "9/16": "56.25%",
      },
      lineHeight: {
        11: "2.75rem",
        12: "3rem",
        13: "3.25rem",
        14: "3.5rem",
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        // primary: colors.teal,
        // gray: colors.neutral,
        // primary: colors.blue,
        // gray: colors.neutral,
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            // "color": theme("colors.gray.700"),
            // "color": theme("colors.slate.500"),
            "a": {
              "color": theme("colors.primary.500"),
              "&:hover": {
                color: theme("colors.primary.600"),
              },
              "code": { color: theme("colors.primary.400") },
            },
            "h1": {
              fontWeight: "700",
              letterSpacing: theme("letterSpacing.tight"),
              // color: theme("colors.gray.900"),
            },
            "h2": {
              fontWeight: "700",
              letterSpacing: theme("letterSpacing.tight"),
              // color: theme("colors.gray.900"),
            },
            "h3": {
              fontWeight: "600",
              // color: theme("colors.gray.900"),
            },
            "h4,h5,h6": {
              // color: theme("colors.gray.900"),
            },
            "pre": {
              backgroundColor: theme("colors.gray.800"),
            },
            "code": {
              color: theme("colors.pink.500"),
              backgroundColor: theme("colors.gray.100"),
              // backgroundColor: theme("colors.blue.100"),
              paddingLeft: "4px",
              paddingRight: "4px",
              paddingTop: "2px",
              paddingBottom: "2px",
              borderRadius: "0.25rem",
            },
            "code::before": {
              content: "none",
            },
            "code::after": {
              content: "none",
            },
            "details": {
              backgroundColor: theme("colors.gray.100"),
              paddingLeft: "4px",
              paddingRight: "4px",
              paddingTop: "2px",
              paddingBottom: "2px",
              borderRadius: "0.25rem",
            },
            "hr": { borderColor: theme("colors.gray.200") },
            "ol li::marker": {
              fontWeight: "600",
              // color: theme("colors.gray.500"),
            },
            "ul li::marker": {
              backgroundColor: theme("colors.gray.500"),
            },
            "strong": {
              // color: theme("colors.gray.600")
            },
            "blockquote": {
              // color: theme("colors.gray.900"),
              borderLeftColor: theme("colors.gray.200"),
            },
          },
        },
        // dark: {
        //   css: {
        //     color: theme("colors.gray.300"),

        //     // ":root": {
        //     //   "--background: blue,
        //     //   "--foreground": black
        //     // }
        //     //   "a": {
        //     //     "color": theme("colors.primary.500"),
        //     //     "&:hover": {
        //     //       color: theme("colors.primary.400"),
        //     //     },
        //     //     "code": { color: theme("colors.primary.400") },
        //     //   },
        //     //   "h1": {
        //     //     fontWeight: "700",
        //     //     letterSpacing: theme("letterSpacing.tight"),
        //     //     color: theme("colors.gray.100"),
        //     //   },
        //     //   "h2": {
        //     //     fontWeight: "700",
        //     //     letterSpacing: theme("letterSpacing.tight"),
        //     //     color: theme("colors.gray.100"),
        //     //   },
        //     //   "h3": {
        //     //     fontWeight: "600",
        //     //     color: theme("colors.gray.100"),
        //     //   },
        //     //   "h4,h5,h6": {
        //     //     color: theme("colors.gray.100"),
        //     //   },
        //     //   "pre": {
        //     //     backgroundColor: theme("colors.gray.800"),
        //     //   },
        //     //   "code": {
        //     //     backgroundColor: theme("colors.gray.800"),
        //     //   },
        //     //   "details": {
        //     //     backgroundColor: theme("colors.gray.800"),
        //     //   },
        //     //   "hr": { borderColor: theme("colors.gray.700") },
        //     //   "ol li::marker": {
        //     //     fontWeight: "600",
        //     //     color: theme("colors.gray.400"),
        //     //   },
        //     //   "ul li::marker": {
        //     //     backgroundColor: theme("colors.gray.400"),
        //     //   },
        //     //   "strong": { color: theme("colors.gray.100") },
        //     //   "thead": {
        //     //     th: {
        //     //       color: theme("colors.gray.100"),
        //     //     },
        //     //   },
        //     //   "tbody": {
        //     //     tr: {
        //     //       borderBottomColor: theme("colors.gray.700"),
        //     //     },
        //     //   },
        //     //   "blockquote": {
        //     //     color: theme("colors.gray.100"),
        //     //     borderLeftColor: theme("colors.gray.700"),
        //     //   },
        //   },
        // },
      }),
    },
  },
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/colors/themes")["[data-theme=light]"],
          "primary": "#9ca3af",
          "secondary": "#9ca3af",
          "secondary-content": "#9ca3af",
          "secondary-content-n": "red",
          "accent": "#9ca3af",
          "neutral": "#333C4D",
          "base-100": "#FFFFFF",
          "info": "#3ABFF8",
          "success": "#36D399",
          "warning": "#FBBD23",
          "error": "#F87272",
        },
      },
      {
        dark: {
          ...require("daisyui/src/colors/themes")["[data-theme=dark]"],
          // "primary": "#9ca3af",
          // "secondary": "#9ca3af",
          // "accent": "#9ca3af",
          // "neutral": "#333C4D",
          // "base-100": "#FFFFFF",
          // "info": "#3ABFF8",
          // "success": "#36D399",
          // "warning": "#FBBD23",
          // "error": "#F87272",
        },
      },
    ],
  },

  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography"), require("daisyui")],
};
