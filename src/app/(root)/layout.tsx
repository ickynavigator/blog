import { Container } from '@mantine/core';
import Footer from './_components/footer';
import Header from './_components/header';
import classes from './layout.module.css';

export const generateMetadata = () => {
  return {
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

      <main className={classes.main}>{children}</main>

      <Footer />
    </Container>
  );
}

export default Layout;
