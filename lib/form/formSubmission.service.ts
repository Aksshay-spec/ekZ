//lib/form/formSubmission.service.ts
export class FormSubmissionService {
  static async save(payload: any) {
    // Save to DB or send email
    console.log("Saving form:", payload);
  }
}
