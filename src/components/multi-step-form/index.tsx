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
    address: z.string(),
    city: z.string(),
    state: z.string(),
    zipcode: z.number(),
  });

  const step1 = useForm({
    resolver: zodResolver(step1Schema),
  });

   const step2 = useForm({
    resolver: zodResolver(step2Schema),
  });

  const handleSubmit = () => {
    setStep(step + 1);
  };

  const nextStep = async() => {
    let valid=false;
   if(step===1){valid=await step1.trigger()}

   if(valid){
     setStep((step) => step + 1);
   }

  };

  const backStep = () => {
    setStep((step) => step - 1);
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      {step === 1 && <Step1 register={step1.register} errors={step1.formState.errors} />}
      {step === 2 && <Step2 register={step2.register} errors={step2.formState.errors}/>}
      {step === 3 && <Step3 />}
      {step > 1 && <button onClick={backStep}>Back</button>}
      {step === 1 && <button onClick={nextStep}>Next</button>}
      {step === 3 && <button onClick={handleSubmit}>Submit</button>}
    </form>
  );
};

export default MultiStepForm;
