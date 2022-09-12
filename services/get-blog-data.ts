import { BlogData } from './types';

export const getBlogData = async (): Promise<BlogData[]> => {
  const data = await import('../data/blog.json');
  return data.default;
};
