//app/api/career-applications/services/careerApplication.service.ts

import type { CareerApplicationRepository } from "../repositories/interfaces/CareerApplicationRepository";
import type { CareerApplication } from "../types/careerApplication.types";

export class CareerApplicationService {
  constructor(private repo: CareerApplicationRepository) {}

  async apply(application: CareerApplication) {
    return this.repo.submitApplication(application);
  }
}
