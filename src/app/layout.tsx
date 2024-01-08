'use client';
import '@mantine/code-highlight/styles.css';
import '@mantine/core/styles.css';

import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import { useLocalStorage } from '@mantine/hooks';
import { Bricolage_Grotesque } from 'next/font/google';
import colors, { COLOR_STORAGE_KEY } from '~/lib/colors';
import { randomProperty } from '~/lib/general';
import theme from '~/lib/mantine';

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  display: 'swap',
  adjustFontFallback: false,
});

const randomScheme = randomProperty(colors);

function Layout({ children }: { children: React.ReactNode }) {
  /**
   * refer to the message above the color swatch comment in the header
   * component for more info on why this is disabled
   *
   * [link](./(root)/_components/header.tsx)
   */
  const colorSchemeInfo = useLocalStorage({
    key: COLOR_STORAGE_KEY,
    defaultValue: 'blue',
  });

  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>

      <body
        className={bricolage.className}
        style={{
          minHeight: '100%',
        }}
      >
        <MantineProvider
          theme={{
            ...theme,
            primaryColor: randomScheme[0],
            fontFamily: bricolage.style.fontFamily,
          }}
        >
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}

export default Layout;
