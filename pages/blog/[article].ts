import { GetStaticPaths, GetStaticProps } from 'next';
import { getBlogData } from '../../services/get-blog-data';
import { BlogData } from '../../services/types';

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await getBlogData();
  const paths = data.map(({ article }) => ({ params: { article } }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<
  BlogData,
  Pick<BlogData, 'article'>
> = async ({ params }) => {
  if (params?.article) {
    const data = await getBlogData();
    const article = data.find(({ article }) => article === params.article);
    return article ? { props: article } : { notFound: true };
  }
  return { notFound: true };
};

export { BlogArticlePage as default } from '../../containers';
