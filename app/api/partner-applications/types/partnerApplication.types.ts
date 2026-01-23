//app/api/partner-applications/types/partnerApplication.types.ts
export type PartnerApplication = {
  name: string;
  email: string;
  phone: string;
  address: string;
  partnerType: string;
  remarks?: string;
  createdAt: string;
};
