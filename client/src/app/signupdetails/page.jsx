"use client";
import { FirstStep } from "@/components/signupSteps/FirstStep";
import { SecondStep } from "@/components/signupSteps/SecondStep";
import { ThirdStep } from "@/components/signupSteps/ThirdStep";
import { useRouter } from "next/navigation";
import { useState } from "react";

const steps = [FirstStep, SecondStep, ThirdStep];

export default function Page() {
  const { push } = useRouter();
  const [step, setStep] = useState(0);
  const StepComponents = steps[step];

  const continueHandler = () => {
    if (step === 2) {
      push("/");
      return;
    }
    setStep((prev) => prev + 1);
  };
  return (
    <div>
      <StepComponents clickHandler={continueHandler} />
    </div>
  );
}
