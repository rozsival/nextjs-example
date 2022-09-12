import { NextPage } from 'next';
import { Card, Grid, Layout } from '../components';
import styles from './home-page.module.css';

export const HomePage: NextPage = () => (
  <Layout>
    <h1 className={styles.title}>
      Welcome to <a href="https://nextjs.org">Next.js!</a>
    </h1>
    <p className={styles.description}>
      This is our example app with SSG + dynamic routes, server-less API and
      deployment to Vercel.
    </p>
    <Grid>
      <Card link="/blog" title="Blog" text="SSG + dynamic routes example" />
      <Card link="/form" title="Form" text="Server-less API function example" />
    </Grid>
  </Layout>
);
