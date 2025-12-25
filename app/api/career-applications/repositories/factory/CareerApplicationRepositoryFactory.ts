//app/api/career-applications/repositories/factory/CareerApplicationRepositoryFactory.ts
import type { CareerApplicationRepository } from "../interfaces/CareerApplicationRepository"
import { CareerApplicationJsonRepository } from "../implementations/CareerApplicationJsonRepository"
import { CareerApplicationMongoRepository } from "../implementations/CareerApplicationMongoRepository"
// import { CareerApplicationFirebaseRepository } from "../implementations/CareerApplicationFirebaseRepository"
// import { CareerApplicationMongoRepository } from "../implementations/CareerApplicationMongoRepository"

export class CareerApplicationRepositoryFactory {
  static getInstance(): CareerApplicationRepository {
    const driver = process.env.CAREER_APPLICATION_DB

    switch (driver) {
      case "firebase":
        // return new CareerApplicationFirebaseRepository()
      case "mongo":
        return new CareerApplicationMongoRepository()
      default:
        return new CareerApplicationJsonRepository()
    }
  }
}
