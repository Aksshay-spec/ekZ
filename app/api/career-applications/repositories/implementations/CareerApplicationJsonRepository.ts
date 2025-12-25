//app/api/career-applications/repositories/implementations/CareerApplicationJsonRepository.ts
import type { CareerApplication } from "../../types/careerApplication.types";
import type { CareerApplicationRepository } from "../interfaces/CareerApplicationRepository";

export class CareerApplicationJsonRepository
  implements CareerApplicationRepository
{
  async submitApplication(_: CareerApplication): Promise<void> {
    // Later: write to file / DB
    console.log("Application submitted (JSON repo)");
  }
}
