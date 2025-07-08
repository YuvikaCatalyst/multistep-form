import { useState } from "react";
import Step1 from "components/multi-step-form/step1";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Step2 from "components/multi-step-form/step2";
import Step3 from "components/multi-step-form/step3";

const MultiStepForm = () => {
  const [step, setStep] = useState(1);

  const step1Schema = z.object({
    name: z.string().min(3),
    email: z.string().email(),
    phoneNumber: z.string().regex(/^(\+91)?[6-9]\d{9}$/),
    gender: z.enum(["male", "female", "other"]),
    dob: z.string().min(1),
  });

  const step2Schema = z.object({
    address: z.string().min(5),
    city: z.string().min(2),
    state: z.string().min(2),
    zipcode: z.string().regex(/^\d{5,6}$/),
  });

  const step3Schema = z
    .object({
      username: z.string().min(5),
      password: z.string().min(6),
      confirmPassword: z.string().min(6),
      termsConditions: z.literal(true, {
        errorMap: () => ({
          message: "You must accept the terms and conditions",
        }),
      }),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "Passwords do not match",
      path: ["confirmPassword"],
    });

  const step1 = useForm({
    resolver: zodResolver(step1Schema),
  });

  const step2 = useForm({
    resolver: zodResolver(step2Schema),
  });

  const step3 = useForm({
    resolver: zodResolver(step3Schema),
  });

 const handleSubmit = async () => {
  const valid = await step3.trigger();
  if (valid) {
    const data1 = step1.getValues();
    const data2 = step2.getValues();
    const data3 = step3.getValues();
    console.log({ ...data1, ...data2, ...data3 });
    alert("Form submitted successfully!");
  }
};

  const nextStep = async () => {
    let valid = false;
    if (step === 1) {
      valid = await step1.trigger();
    }
    if (step === 2) {
      valid = await step2.trigger();
    }

    if (valid) {
      setStep((step) => step + 1);
    }
  };

  const backStep = () => {
    setStep((step) => step - 1);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      {step === 1 && (
        <Step1 register={step1.register} errors={step1.formState.errors} />
      )}
      {step === 2 && (
        <Step2 register={step2.register} errors={step2.formState.errors} />
      )}
      {step === 3 && (
        <Step3 register={step3.register} errors={step3.formState.errors} />
      )}
      {step > 1 && <button  type="button" onClick={backStep}>Back</button>}
      {step < 3 && <button  type="button" onClick={nextStep}>Next</button>}
      {step === 3 && <button type="submit">Submit</button>}
    </form>
  );
};

export default MultiStepForm;
