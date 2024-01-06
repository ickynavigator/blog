import '@mantine/code-highlight/styles.css';
import '@mantine/core/styles.css';

import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import type { Metadata } from 'next';
import { Bricolage_Grotesque } from 'next/font/google';
import theme from '~/lib/mantine';

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  display: 'swap',
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: "Fortune's Blog",
  description: "Fortune's Blog",
};

function Layout({ children }: { children: React.ReactNode }) {
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
        <MantineProvider theme={theme}>{children}</MantineProvider>
      </body>
    </html>
  );
}

export default Layout;
