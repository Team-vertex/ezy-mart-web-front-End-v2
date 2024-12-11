/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
    'postcss-preset-mantine': {},
    'postcss-simple-vars': {
      variables: {
        'mantine-breakpoint-none': '100%',
        'mantine-breakpoint-sm': '40em',  // 640px
        'mantine-breakpoint-md': '48em',  // 768px
        'mantine-breakpoint-lg': '64em',  // 1024px
        'mantine-breakpoint-xl': '80em',  // 1280px
        'mantine-breakpoint-2xl': '96em', // 1536px
      },
    },
  },
};

export default config;