//app/api/career-applications/repositories/implementations/CareerApplicationMongoRepository.ts
import { connectMongo } from "@/lib/db/mongodb";
import { CareerApplicationModel } from "../../models/CareerApplication.model";
import type { CareerApplication } from "../../types/careerApplication.types";
import type { CareerApplicationRepository } from "../interfaces/CareerApplicationRepository";

export class CareerApplicationMongoRepository
  implements CareerApplicationRepository
{
  async submitApplication(application: CareerApplication): Promise<void> {
    await connectMongo();

    await CareerApplicationModel.create(application);
  }
}
