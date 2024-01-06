import '@mantine/core/styles.css';

import { ColorSchemeScript, Container, MantineProvider } from '@mantine/core';
import type { Metadata } from 'next';
import { Bricolage_Grotesque } from 'next/font/google';
import Footer from './_components/footer';
import Header from './_components/header';

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

      <body className={bricolage.className}>
        <MantineProvider>
          <Container size="md">
            <Header />

            {children}

            <Footer />
          </Container>
        </MantineProvider>
      </body>
    </html>
  );
}

export default Layout;
