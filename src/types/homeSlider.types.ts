// src/types/homeSlider.types.ts
export type Slide = {
  id: number;
  image: string; // file name in /public/images
  title: string;
  heading: [string, string];
  description: string;
};
