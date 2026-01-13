//app/api/career-cards/types/careerCards.types.ts
export type CareerCardItem = {
  id: number;
  slug: string;
  title: string;
  description: string;
  image: string;
  applyHref: string;

  postedDate: string;
  endDate: string;
  location: string;
  employmentType: string;
  experience: string;
  positions: number;

  requirements: string[];
  responsibilities: string[];
  qualifications: string[];
};
