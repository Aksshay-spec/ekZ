//app/api/career-applications/repositories/interfaces/CareerApplicationRepository.ts
import type { CareerApplication } from "../../types/careerApplication.types";

export interface CareerApplicationRepository {
  submitApplication(application: CareerApplication): Promise<void>;
}
