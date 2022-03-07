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
        brown: "#ad5c5c",
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
          "primary": "#855CFF",
          "primary-content": "#FFFFFF",
          "secondary": "#FF00FF",
          "secondary-content": "#FFFFFF",
          // "accent": "#9ca3af",
          "neutral": "#140052",
          "info": "#3ABFF8",
          "success": "#36D399",
          "warning": "#FBBD23",
          "error": "#F87272",
          // "primary": "#343232",
          // "secondary": "#343232",
          // "accent": "#343232",
          // "base-100": "#000000",
          // "base-200": "#0D0D0D",
          // "base-300": "#1A1919",
          // "neutral": "#272626",
          // "neutral-focus": "#343232",
          // "info": "#0000ff",
          // "success": "#008000",
          // "warning": "#ffff00",
          // "error": "#ff0000",
          // "--rounded-box": "0",
          // "--rounded-btn": "0",
          // "--rounded-badge": "0",
          // "--animation-btn": "0",
          // "--animation-input": "0",
          // "--btn-text-case": "lowercase",
          // "--btn-focus-scale": "1",
          // "--tab-radius": "0",
        },
      },
      {
        dark: {
          ...require("daisyui/src/colors/themes")["[data-theme=dark]"],

          // "primary": "#9ca3af",
          // "secondary": "#9ca3af",
          // "accent": "#9ca3af",
          neutral: "#f5f5f5",
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
