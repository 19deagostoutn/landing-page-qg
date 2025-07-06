import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // Paleta personalizada 19 de Agosto
        primary: {
          50: "#f3f6d7", // #f3f6d7
          100: "#f9fdcf", // #f9fdcf
          200: "#f5fdb2", // #f5fdb2
          300: "#ecf791", // #ecf791
          400: "#ead347", // #ead347
          500: "#f0cb2a", // #f0cb2a (amarillo principal)
          600: "#e2ab2d", // #e2ab2d
          700: "#d4941f",
          800: "#b8821a",
          900: "#9a6e15",
        },
        secondary: {
          50: "#f0f4f8",
          100: "#e1eaf2",
          200: "#9dbed6", // #9dbed6 (azul claro)
          300: "#7ba3c7",
          400: "#5a88b8",
          500: "#4f6d8f", // #4f6d8f (azul medio)
          600: "#2f5a8d", // #2f5a8d (azul medio-oscuro)
          700: "#1b3a5d", // #1b3a5d (azul oscuro)
          800: "#152e47",
          900: "#0f2332",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

export default config
