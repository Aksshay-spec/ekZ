//app/api/partner-applications/services/partnerApplication.service.ts
import type { PartnerApplicationRepository } from "../repositories/interfaces/PartnerApplicationRepository";
import type { PartnerApplication } from "../types/partnerApplication.types";

export class PartnerApplicationService {
  constructor(private repo: PartnerApplicationRepository) {}

  async apply(application: PartnerApplication) {
    return this.repo.submitApplication(application);
  }
}
