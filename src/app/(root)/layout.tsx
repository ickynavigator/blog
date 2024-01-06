import '@mantine/core/styles.css';

import { ColorSchemeScript, Container, MantineProvider } from '@mantine/core';
import cx from 'clsx';
import type { Metadata } from 'next';
import { Bricolage_Grotesque } from 'next/font/google';
import theme from '~/lib/mantine';
import Footer from './_components/footer';
import Header from './_components/header';
import classes from './layout.module.css';

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

      <body className={cx(bricolage.className, classes.body)}>
        <MantineProvider theme={theme}>
          <Container size="md" className={classes.container}>
            <Header />

            <main className={classes.main}>{children}</main>

            <Footer />
          </Container>
        </MantineProvider>
      </body>
    </html>
  );
}

export default Layout;
