import { Layout } from '../components';
import { BlogData } from '../services/types';
import styles from './blog-article-page.module.css';

export const BlogArticlePage = ({ title, publishedAt, text }: BlogData) => (
  <Layout>
    <h1>{title}</h1>
    <code>{publishedAt}</code>
    <p className={styles.text}>{text}</p>
  </Layout>
);
