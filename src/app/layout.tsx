'use client';
import '@mantine/code-highlight/styles.css';
import '@mantine/core/styles.css';

import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import { Analytics } from '@vercel/analytics/react';
import theme from '~/lib/mantine';

function Layout({ children }: { children: React.ReactNode }) {
  /**
   * refer to the message above the color swatch comment in the header
   * component for more info on why this is disabled
   *
   * [link](./(root)/_components/header.tsx)
   */
  // const colorSchemeInfo = useLocalStorage({
  //   key: COLOR_STORAGE_KEY,
  //   defaultValue: 'blue',
  // });

  // const randomScheme = randomProperty(colors);

  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>

      <body style={{ minHeight: '100%' }}>
        <MantineProvider
          theme={{
            ...theme,
            // primaryColor: randomScheme[0],
          }}
        >
          {children}
        </MantineProvider>
        <Analytics />
      </body>
    </html>
  );
}

export default Layout;
