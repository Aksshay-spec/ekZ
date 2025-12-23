//lib/captcha/manual-captcha.service.ts
const store = new Map<string, number>(); // Redis in prod

export class ManualCaptchaService {
  static generate() {
    const a = Math.floor(Math.random() * 9) + 1;
    const b = Math.floor(Math.random() * 9) + 1;

    const id = crypto.randomUUID();
    store.set(id, a + b);

    return {
      challengeId: id,
      question: `What is ${a} + ${b}?`,
    };
  }

  static verify(id: string, answer: number) {
    const correct = store.get(id);

    if (!correct) return false;
    if (Number(answer) !== correct) return false;

    store.delete(id);
    return true;
  }
}
