import type { Config } from 'tailwindcss';

import { corePlugin, CorePluginConfig } from './config/tailwind';
import { appTheme } from './src/shared/config/theme';

const pluginOptions: CorePluginConfig = {
  themes: appTheme,
  defaultTheme: 'light',
};

const config: Config = {
  content: ['./public/index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ['Kaspersky Sans', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        'sans-display': ['Kaspersky Sans Display', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float-up': 'float-up 3s ease-in-out infinite',
        'scale-opacity': 'scale-opacity 2s infinite',
      },
      keyframes: {
        'float-up': {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
          '100%': { transform: 'translateY(0)' },
        },
        'scale-opacity': {
          '0%, 100%': { transform: 'scale(0.3)', opacity: '1' },
          '100%': { transform: 'scale(1)', opacity: '0' },
        },
      },
    },
  },
  plugins: [corePlugin(pluginOptions)],
};

export default config;
