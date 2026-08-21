import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#F4F3F1",
        card: "#FFFDF8",
        line: "#E9E7E3",
        "line-soft": "#E6E4E0",
        ink: "#1B1E27",
        "ink-soft": "#211F1A",
        body: "#344054",
        muted: "#565A66",
        faint: "#6B6B6B",
        blue: "#3E6FA8",
        sage: "#22B573",
      },
      fontFamily: {
        display: ["var(--font-acorn)", "Georgia", "serif"],
        sans: ["var(--font-nata-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
        script: ["var(--font-dancing-script)", "cursive"],
      },
      maxWidth: {
        content: "1180px",
      },
    },
  },
  plugins: [],
};

export default config;
