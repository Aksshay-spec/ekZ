//components/common/ManualCaptcha.tsx
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface ManualCaptchaProps {
  challenge: {
    challengeId: string;
    question: string;
  };
  onSuccess: () => void;
}

export default function ManualCaptcha({
  challenge,
  onSuccess,
}: ManualCaptchaProps) {
  const [answer, setAnswer] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);
  const [error, setError] = useState("");

  async function verify() {
    if (!answer.trim()) {
      setError("Please enter an answer");
      return;
    }

    setIsVerifying(true);
    setError("");

    try {
      const res = await fetch("/api/captcha/manual", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          challengeId: challenge.challengeId,
          answer: parseInt(answer),
        }),
      }).then((r) => r.json());

      if (res.success) {
        onSuccess();
      } else {
        setError("Incorrect answer. Please try again.");
      }
    } catch (error) {
      console.error("Verification error:", error);
      setError("Verification failed. Please try again.");
    } finally {
      setIsVerifying(false);
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      verify();
    }
  };

  return (
    <div className="p-6 border rounded-xl space-y-4 bg-white shadow-sm">
      <div>
        <h3 className="text-lg font-semibold mb-2">Security Verification</h3>
        <p className="text-gray-600 mb-4">
          Please solve this simple math problem to continue:
        </p>
        <p className="text-xl font-medium text-gray-800">
          {challenge.question}
        </p>
      </div>

      <Input
        type="number"
        placeholder="Your answer"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        onKeyPress={handleKeyPress}
        disabled={isVerifying}
        className="text-lg"
      />

      {error && <p className="text-sm text-red-500">{error}</p>}

      <Button
        onClick={verify}
        disabled={isVerifying}
        className="bg-aqua-green-500 hover:bg-aqua-green-600 text-white w-full"
      >
        {isVerifying ? "Verifying..." : "Verify & Submit"}
      </Button>
    </div>
  );
}
