import { Card, Grid, Layout } from '../components';
import { BlogData } from '../services/types';

export const BlogPage = ({ articles }: { articles: BlogData[] }) => (
  <Layout>
    <h1>Blog</h1>
    <p>SSG + dynamic routes example</p>
    <Grid>
      {articles.map(({ article, title, publishedAt }) => (
        <Card
          key={article}
          link={`/blog/${article}`}
          title={title}
          text={publishedAt}
        />
      ))}
    </Grid>
  </Layout>
);
