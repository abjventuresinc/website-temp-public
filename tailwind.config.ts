import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Base UI Colors
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        
        // Background Colors
        'bg-secondary': "hsl(var(--background-secondary))",
        'bg-tertiary': "hsl(var(--background-tertiary))",
        
        // Text Colors
        'text-light': "hsl(var(--text-light))",
        'text-dark': "hsl(var(--text-dark))",
        'text-muted': "hsl(var(--text-muted))",
        'text-secondary': "hsl(var(--text-secondary))",
        
        // Enhanced Text Colors
        'text-primary': "hsl(var(--text-primary))",
        'text-primary-light': "hsl(var(--text-primary-light))",
        'text-secondary-light': "hsl(var(--text-secondary-light))",
        'text-muted-light': "hsl(var(--text-muted-light))",
      
        // Grayscale Colors with Dark Mode Support
        'gray-50-dark': "hsl(var(--gray-50-dark))",
        'gray-100-dark': "hsl(var(--gray-100-dark))",
        'gray-200-dark': "hsl(var(--gray-200-dark))",
        'gray-300-dark': "hsl(var(--gray-300-dark))",
        'gray-400-dark': "hsl(var(--gray-400-dark))",
        'gray-500-dark': "hsl(var(--gray-500-dark))",
        'gray-600-dark': "hsl(var(--gray-600-dark))",
        'gray-700-dark': "hsl(var(--gray-700-dark))",
        'gray-800-dark': "hsl(var(--gray-800-dark))",
        'gray-900-dark': "hsl(var(--gray-900-dark))",
        
        // Primary Colors
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          hover: "hsl(var(--primary-hover))",
        },
        
        // Accent Colors
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
          hover: "hsl(var(--accent-hover))",
        },
        
        // Secondary Colors
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
          hover: "hsl(var(--secondary-hover))",
        },
        
        // Tertiary Colors
        tertiary: {
          DEFAULT: "hsl(var(--tertiary))",
          foreground: "hsl(var(--tertiary-foreground))",
          hover: "hsl(var(--tertiary-hover))",
        },
        
        // Grayscale Colors
        gray: {
          50: "hsl(var(--gray-50))",
          100: "hsl(var(--gray-100))",
          200: "hsl(var(--gray-200))",
          300: "hsl(var(--gray-300))",
          400: "hsl(var(--gray-400))",
          500: "hsl(var(--gray-500))",
          600: "hsl(var(--gray-600))",
          700: "hsl(var(--gray-700))",
          800: "hsl(var(--gray-800))",
          900: "hsl(var(--gray-900))",
        },
        
        // UI Colors
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
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
      fontFamily: {
        sans: ['system-ui', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
