/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        base: {
          white: "#FFFFFF",
          black: "#000000",
        },
        surface: {
          primary: "#FFFFFF",
          secondary: "#FAFAFA",
        },
        primary: {
          50: "#F0F9FF",
          100: "#E0F2FE",
          200: "#BAE6FD",
          300: "#7DD3FC",
          400: "#38BDF8",
          500: "#0EA5E9",
          600: "#0284C7",
          700: "#0369A1",
          800: "#075985",
          900: "#0C4A6E",
          950: "#082F49",
        },
        secondary: {
          50: "#F6F7F9",
          100: "#EDEEF1",
          200: "#D6DAE1",
          300: "#B3BBC6",
          400: "#8996A7",
          500: "#6A788D",
          600: "#556074",
          700: "#464F5E",
          800: "#3C4350",
          900: "#31363F",
          950: "#23272E",
        },

        coral: {
          50: "#fef2f2",
          100: "#fee2e2",
          200: "#fdcaca",
          300: "#fba5a5",
          400: "#f87171",
          500: "#ea384c",
          600: "#dc2626",
          700: "#b91c1c",
          800: "#991b1b",
          900: "#7f1d1d",
        },
        accent: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
        },
        gray: {
          50: "#f9fafb",
          100: "#f3f4f6",
          200: "#e5e7eb",
          300: "#d1d5db",
          400: "#9ca3af",
          500: "#6b7280",
          600: "#4b5563",
          700: "#374151",
          800: "#1f2937",
          900: "#111827",
        },
      },
      fontFamily: {
        instrument: ["Instrument Sans", "Inter", "system-ui", "sans-serif"],
        geist: ["Geist", "Inter", "system-ui", "sans-serif"],
        bradley: ['"Bradley Hand"', "cursive", "sans-serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-semibold": [
          "60px",
          {
            lineHeight: "72px",
            letterSpacing: "-2px",
            fontWeight: "600",
            fontFamily: "Instrument Sans, Inter, system-ui, sans-serif",
          },
        ],
        "display-bold": [
          "60px",
          {
            lineHeight: "72px",
            letterSpacing: "-2px",
            fontWeight: "700",
            fontFamily: "Instrument Sans, Inter, system-ui, sans-serif",
          },
        ],
        "heading-1-medium": [
          "48px",
          {
            lineHeight: "60px",
            letterSpacing: "-2px",
            fontWeight: "500",
            fontFamily: "Instrument Sans, Inter, system-ui, sans-serif",
          },
        ],
        "heading-1-semibold": [
          "48px",
          {
            lineHeight: "60px",
            letterSpacing: "-2px",
            fontWeight: "600",
            fontFamily: "Instrument Sans, Inter, system-ui, sans-serif",
          },
        ],
        "heading-2-medium": [
          "36px",
          {
            lineHeight: "44px",
            letterSpacing: "-2px",
            fontWeight: "500",
            fontFamily: "Instrument Sans, Inter, system-ui, sans-serif",
          },
        ],
        "heading-2-semibold": [
          "36px",
          {
            lineHeight: "44px",
            letterSpacing: "-2px",
            fontWeight: "600",
            fontFamily: "Instrument Sans, Inter, system-ui, sans-serif",
          },
        ],
        "heading-3-medium": [
          "30px",
          {
            lineHeight: "38px",
            letterSpacing: "0",
            fontWeight: "500",
            fontFamily: "Instrument Sans, Inter, system-ui, sans-serif",
          },
        ],
        "heading-3-semibold": [
          "30px",
          {
            lineHeight: "38px",
            letterSpacing: "0",
            fontWeight: "600",
            fontFamily: "Instrument Sans, Inter, system-ui, sans-serif",
          },
        ],
        "heading-4-medium": [
          "24px",
          {
            lineHeight: "32px",
            letterSpacing: "0",
            fontWeight: "500",
            fontFamily: "Instrument Sans, Inter, system-ui, sans-serif",
          },
        ],
        "heading-4-semibold": [
          "24px",
          {
            lineHeight: "32px",
            letterSpacing: "0",
            fontWeight: "600",
            fontFamily: "Instrument Sans, Inter, system-ui, sans-serif",
          },
        ],
        "heading-5-medium": [
          "20px",
          {
            lineHeight: "30px",
            letterSpacing: "0",
            fontWeight: "500",
            fontFamily: "Instrument Sans, Inter, system-ui, sans-serif",
          },
        ],
        "heading-5-semibold": [
          "20px",
          {
            lineHeight: "30px",
            letterSpacing: "0",
            fontWeight: "600",
            fontFamily: "Instrument Sans, Inter, system-ui, sans-serif",
          },
        ],
        "paragraph-lg-regular": [
          "18px",
          {
            lineHeight: "28px",
            letterSpacing: "0",
            fontWeight: "400",
            fontFamily: "Geist, Inter, system-ui, sans-serif",
          },
        ],
        "paragraph-lg-medium": [
          "18px",
          {
            lineHeight: "28px",
            letterSpacing: "0",
            fontWeight: "500",
            fontFamily: "Geist, Inter, system-ui, sans-serif",
          },
        ],
        "paragraph-lg-semibold": [
          "18px",
          {
            lineHeight: "28px",
            letterSpacing: "0",
            fontWeight: "600",
            fontFamily: "Geist, Inter, system-ui, sans-serif",
          },
        ],
        "paragraph-lg-bold": [
          "18px",
          {
            lineHeight: "28px",
            letterSpacing: "0",
            fontWeight: "700",
            fontFamily: "Geist, Inter, system-ui, sans-serif",
          },
        ],
        "paragraph-md-regular": [
          "16px",
          {
            lineHeight: "24px",
            letterSpacing: "0",
            fontWeight: "400",
            fontFamily: "Geist, Inter, system-ui, sans-serif",
          },
        ],
        "paragraph-md-medium": [
          "16px",
          {
            lineHeight: "24px",
            letterSpacing: "0",
            fontWeight: "500",
            fontFamily: "Geist, Inter, system-ui, sans-serif",
          },
        ],
        "paragraph-md-semibold": [
          "16px",
          {
            lineHeight: "24px",
            letterSpacing: "0",
            fontWeight: "600",
            fontFamily: "Geist, Inter, system-ui, sans-serif",
          },
        ],
        "paragraph-md-bold": [
          "16px",
          {
            lineHeight: "24px",
            letterSpacing: "0",
            fontWeight: "700",
            fontFamily: "Geist, Inter, system-ui, sans-serif",
          },
        ],
        "paragraph-sm-regular": [
          "14px",
          {
            lineHeight: "20px",
            letterSpacing: "0",
            fontWeight: "400",
            fontFamily: "Geist, Inter, system-ui, sans-serif",
          },
        ],
        "paragraph-sm-medium": [
          "14px",
          {
            lineHeight: "20px",
            letterSpacing: "0",
            fontWeight: "500",
            fontFamily: "Geist, Inter, system-ui, sans-serif",
          },
        ],
        "paragraph-sm-semibold": [
          "14px",
          {
            lineHeight: "20px",
            letterSpacing: "0",
            fontWeight: "600",
            fontFamily: "Geist, Inter, system-ui, sans-serif",
          },
        ],
        "paragraph-sm-bold": [
          "14px",
          {
            lineHeight: "20px",
            letterSpacing: "0",
            fontWeight: "700",
            fontFamily: "Geist, Inter, system-ui, sans-serif",
          },
        ],
      },
      boxShadow: {
        "primary-50": "0px 2px 24px 2px var(--primary-50)",
      },

      animation: {
        "fade-in-up": "fadeInUp 0.8s ease-out forwards",
        "fade-in": "fadeIn 1s ease-out forwards",
        "slide-in-left": "slideInLeft 0.8s ease-out forwards",
        "slide-in-right": "slideInRight 0.8s ease-out forwards",
        float: "float 6s ease-in-out infinite",
        "pulse-soft": "pulseSoft 2s ease-in-out infinite",
        "gradient-shift": "gradientShift 8s ease-in-out infinite",
        "gentle-bounce": "gentleBounce 2s ease-in-out infinite",
      },
      keyframes: {
        fadeInUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(30px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        fadeIn: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
        slideInLeft: {
          "0%": {
            opacity: "0",
            transform: "translateX(-30px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        slideInRight: {
          "0%": {
            opacity: "0",
            transform: "translateX(30px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        float: {
          "0%, 100%": {
            transform: "translateY(0px)",
          },
          "50%": {
            transform: "translateY(-10px)",
          },
        },
        pulseSoft: {
          "0%, 100%": {
            opacity: "1",
            transform: "scale(1)",
          },
          "50%": {
            opacity: "0.8",
            transform: "scale(1.02)",
          },
        },
        gradientShift: {
          "0%, 100%": {
            backgroundPosition: "0% 50%",
          },
          "50%": {
            backgroundPosition: "100% 50%",
          },
        },
        gentleBounce: {
          "0%, 100%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-5px)",
          },
        },
      },
    },
  },
  plugins: [],
};
