//app/api/career-applications/models/CareerApplication.model.ts
import mongoose, { Schema, model, models } from "mongoose";

const CareerApplicationSchema = new Schema(
  {
    jobSlug: { type: String, required: true },
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    phone: String,
    location: String,
    experience: String,
    coverLetter: String,
    resumeUrl: String,
  },
  { timestamps: true }
);

export const CareerApplicationModel =
  models.CareerApplication ||
  model("CareerApplication", CareerApplicationSchema);
