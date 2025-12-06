// app/api/our-news/types/ourNews.types.ts

export type NewsItem = {
  id: number;
  title: string;
  publication: string;
  image: string; // file name in /public/images
};
