//app/api/career-applications/types/careerApplication.types.ts
export type CareerApplication = {
  jobSlug: string;

  fullName: string;
  email: string;
  phone: string;

  location: string;
  experience: string;
  currentCompany?: string;
  expectedSalary?: string;

  portfolioUrl?: string;
  linkedinUrl?: string;

  coverLetter: string;
  resumeUrl: string;

  createdAt: string;
};
