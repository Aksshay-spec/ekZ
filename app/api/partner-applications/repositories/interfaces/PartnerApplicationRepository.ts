//app/api/partner-applications/repositories/interfaces/PartnerApplicationRepository.ts
import type { PartnerApplication } from "../../types/partnerApplication.types";

export interface PartnerApplicationRepository {
  submitApplication(application: PartnerApplication): Promise<void>;
}
