import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        lg: "2rem",
        xl: "2.5rem"
      }
    },
    extend: {
      colors: {
        ink: "#1a1a2e",
        gold: "#f59e0b",
        sand: "#f6efe4",
        clay: "#7b5f49",
        mist: "#d9dddf",
        forest: "#32554b"
      },
      fontFamily: {
        sans: ["var(--font-sans)", "sans-serif"],
        display: ["var(--font-display)", "serif"]
      },
      boxShadow: {
        luxe: "0 24px 60px rgba(16, 19, 33, 0.14)",
        soft: "0 14px 40px rgba(16, 19, 33, 0.08)"
      },
      backgroundImage: {
        "hero-glow":
          "radial-gradient(circle at top left, rgba(197, 142, 68, 0.28), transparent 34%), radial-gradient(circle at right, rgba(50, 85, 75, 0.22), transparent 30%)",
        grain:
          "linear-gradient(135deg, rgba(255,255,255,0.06), transparent 35%), linear-gradient(315deg, rgba(255,255,255,0.04), transparent 40%)"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" }
        },
        reveal: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        }
      },
      animation: {
        float: "float 7s ease-in-out infinite",
        reveal: "reveal 0.7s ease-out both"
      }
    }
  },
  plugins: []
};

export default config;
