import { GetStaticProps } from 'next';
import { getBlogData } from '../../services/get-blog-data';
import { BlogData } from '../../services/types';

export const getStaticProps: GetStaticProps<{
  articles: BlogData[];
}> = async () => {
  const articles = await getBlogData();
  return { props: { articles } };
};

export { BlogPage as default } from '../../containers';
