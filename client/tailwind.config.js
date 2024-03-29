/** @type {import('tailwindcss').Config} */
import headlessuiPlugin from "@headlessui/tailwindcss";
import keepPreset from "keep-react/preset";
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    'node_modules/keep-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      gradientColorStops: () => ({
        purple: '#833ab4',
        red: '#fd1d1d',
      }),
      linearGradientDirections: {
        br: 'to bottom right',
      },
      flash: {
        transition: 'all 0.2s ease-in-out',
      },
      aspectRatio: {
        '4/3': '4 / 3',
        '16/9': '16 / 9',
      },
      colors: {
        // brand colors
        primary: '#3583c2',
        'text-color': '#1d1c1c ',
        'background-color': '#fffefb',
        'background-color-component': '#cccbc8',
        'primary-light-color': '#d4eaf7',
        'primary-dark-color': '#3b3c3d',
        'contrast-accent-color': '#71c4ef',
        'contrast-accent-color-dark': '#00668c',
        secondary: '#e5eef9',
        'hover-primary': '#1f5385',
        'blue-500': '#3583c2',
        'blue-300': '#94c0e5',
        'blue-600': '#4a79c6',
        'blue-900': '#222e49',
        neutral: {
          100: '#f2f2f2',
          200: '#d9d9d9',
          300: '#bfbfbf',
          400: '#a6a6a6',
          500: '#8c8c8c',
          600: '#737373',
          700: '#595959',
          800: '#404040',
          900: '#252525',
        },
        'primary-light': '#AACB62',
      },
      keyframes: {
        typewriter: {
          from: {
            'text-indent': '-100%',
            'letter-spacing': '0.2em',
            transform: 'scale(1.1)',
          },

          to: {
            'text-indent': '0%',
            'letter-spacing': '0',
            transform: 'scale(1)',
          },
        },
        destello: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': {
            transform: 'translateX(100%)',
          },
        },
        reveal: {
          '0%': { opacity: '0', transform: 'translateY(100px)' },
          '50%': { opacity: '1' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        enterFromRight: {
          from: { opacity: 0, transform: 'translateX(200px)' },
          via: { opacity: 0, transform: 'translateX(150px)' },
          to: { opacity: 1, transform: 'translateX(0)' },
        },
        enterFromLeft: {
          from: { opacity: 0, transform: 'translateX(-200px)' },
          to: { opacity: 1, transform: 'translateX(0)' },
        },
        exitToRight: {
          from: { opacity: 1, transform: 'translateX(0)' },
          to: { opacity: 0, transform: 'translateX(200px)' },
        },
        exitToLeft: {
          from: { opacity: 1, transform: 'translateX(0)' },
          to: { opacity: 0, transform: 'translateX(-200px)' },
        },
        scaleIn: {
          from: { opacity: 0, transform: 'rotateX(-10deg) scale(0.9)' },
          to: { opacity: 1, transform: 'rotateX(0deg) scale(1)' },
        },
        scaleOut: {
          from: { opacity: 1, transform: 'rotateX(0deg) scale(1)' },
          to: { opacity: 0, transform: 'rotateX(-10deg) scale(0.95)' },
        },
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        fadeOut: {
          from: { opacity: 1 },
          to: { opacity: 0 },
        },
        pulse: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.5 },
        },
      },
    },
    animation: {
      reveal: 'reveal 1s linear',
      scaleIn: 'scaleIn 200ms ease',
      scaleOut: 'scaleOut 500ms ease-in-out',
      fadeIn: 'fadeIn 300ms ease-in',
      fadeOut: 'fadeOut 200ms ease',
      enterFromLeft: 'enterFromLeft 250ms ease',
      enterFromRight: 'enterFromRight 350ms ease',
      exitToLeft: 'exitToLeft 250ms ease',
      exitToRight: 'exitToRight 250ms ease',
      destello: 'destello 1s ease-in-out infinite',
      typewriter: 'typewriter 3s steps(60, end)',
      pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
    },
  },
  screens: {
    xs: '420px',
  },
  plugins: [headlessuiPlugin({ prefix: 'ui' })],
  presets: [keepPreset],
};
