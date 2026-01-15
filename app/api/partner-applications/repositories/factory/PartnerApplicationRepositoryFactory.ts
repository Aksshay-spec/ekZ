//app/api/partner-applications/repositories/factory/PartnerApplicationRepositoryFactory.ts
import { PartnerApplicationJsonRepository } from "../implementations/PartnerApplicationJsonRepository";
import type { PartnerApplicationRepository } from "../interfaces/PartnerApplicationRepository";

export class PartnerApplicationRepositoryFactory {
  static getInstance(): PartnerApplicationRepository {
    return new PartnerApplicationJsonRepository();
  }
}
