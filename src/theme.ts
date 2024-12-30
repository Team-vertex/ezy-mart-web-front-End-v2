import { Button, createTheme, MantineThemeOverride } from '@mantine/core';

const theme: MantineThemeOverride = createTheme({
  primaryColor: 'primary',
  fontFamily: 'SFProDisplay',
  colors: {
    primary: [
      '#0A65FC',
      '#0A65FC',
      '#0A65FC',
      '#0A65FC',
      '#0A65FC',
      '#0A65FC',
      '#0A65FC',
      '#0A65FC',
      '#0A65FC',
      '#0A65FC',
    ],
  },
  components: {
    Button: Button.extend({
      classNames(_, { variant }) {
        if (variant === 'nav-btn')
          return {
            root: '!bg-white',
            label: 'text-black text-base',
          };

        if (variant === 'dark')
          return {
            root: '!bg-black !rounded-lg',
            label: 'tracking-wider',
          };

        return {};
      },
    }),
  },
});

export default theme;
