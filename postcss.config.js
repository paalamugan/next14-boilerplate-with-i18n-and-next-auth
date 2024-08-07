// Please do not use the array form (like ['tailwindcss', 'postcss-preset-env'])
// it will create an unexpected error: Invalid PostCSS Plugin found: [0]

/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {}),
    'postcss-mixins': {},
    'postcss-simple-vars': {},
    'postcss-calc': {},
    'postcss-import': {},
    'tailwindcss/nesting': {},
  },
};

export default config;
