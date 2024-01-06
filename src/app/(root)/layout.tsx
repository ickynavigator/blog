import { Container } from '@mantine/core';
import Footer from './_components/footer';
import Header from './_components/header';
import classes from './layout.module.css';

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
