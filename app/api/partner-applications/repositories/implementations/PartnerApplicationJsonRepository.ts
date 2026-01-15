//app/api/partner-applications/repositories/implementations/PartnerApplicationJsonRepository.ts
import type { PartnerApplication } from "../../types/partnerApplication.types";
import type { PartnerApplicationRepository } from "../interfaces/PartnerApplicationRepository";

export class PartnerApplicationJsonRepository
  implements PartnerApplicationRepository
{
  async submitApplication(_: PartnerApplication): Promise<void> {
    console.log("Partner application submitted (JSON repo)");
  }
}
