'use client';
import '@mantine/code-highlight/styles.css';
import '@mantine/core/styles.css';

import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import { useLocalStorage } from '@mantine/hooks';
import { Bricolage_Grotesque } from 'next/font/google';
import { COLOR_STORAGE_KEY } from '~/lib/colors';
import theme from '~/lib/mantine';

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  display: 'swap',
  adjustFontFallback: false,
});

function Layout({ children }: { children: React.ReactNode }) {
  const [value] = useLocalStorage({
    key: COLOR_STORAGE_KEY,
    defaultValue: 'blue-gray',
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
            primaryColor: value,
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
