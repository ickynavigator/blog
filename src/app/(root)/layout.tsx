import { Box, Container } from '@mantine/core';
import Footer from './_components/footer';
import Header from './_components/header';
import classes from './layout.module.css';
import { env } from '~/env';

export const generateMetadata = () => {
  return {
    metadataBase: new URL(`https://${env.VERCEL_URL}`),
    title: {
      template: '%s | Obi Fortune',
      default: "Obi Fortune's Blog",
    },
    keywords: [
      'Next.js',
      'React',
      'TypeScript',
      'Mantine',
      'Sanity',
      'Blog',
      'Obi Fortune',
      'Javascript',
      'Tech',
      'Technology',
      'Programming',
      'Web Development',
    ],
    authors: [{ name: 'Obi Fortune', url: 'https://obifortune.com' }],
    creator: 'Obi Fortune',
  };
};

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Container size="md" className={classes.container}>
      <Header />

      <Box component="main" py="md" className={classes.main}>
        {children}
      </Box>

      <Footer />
    </Container>
  );
}

export default Layout;
