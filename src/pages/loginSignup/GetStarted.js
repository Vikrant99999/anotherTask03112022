import React, { useEffect, useState } from "react";
import "./GetStarted.css";
import { Stepper as ReactStepper } from "react-form-stepper";
import Step0 from "./onBoarding/Step0";
import Step1 from "./onBoarding/Step1";
import Step2 from "./onBoarding/Step2";
import Step3 from "./onBoarding/Step3";
import Step4 from "./onBoarding/Step4";
import Step5 from "./onBoarding/Step5";
import Step6 from "./onBoarding/Step6";

const GetStarted = () => {
  const [completeStep, setCompleteStep] = useState(-1);

  useEffect(() => {
    let steps = 8;
    const stepShow = document.querySelector(
      ".kn-global-onboarding-steps-completed"
    );
    let width = ((completeStep + 1) * 100) / steps;
    stepShow.style.width = `${width}%`;
  }, [completeStep]);


  return (
    <div className="kn-global-onboarding-page">
      <div className="kn-global-onboarding-steps-completed"></div>
      <ReactStepper activeStep={completeStep} style={{ padding: "0px" }} />
      {completeStep === -1 && <Step0 setStep={setCompleteStep} />}
      {completeStep === 0 && <Step1 setStep={setCompleteStep} />}
      {completeStep === 1 && <Step2 setStep={setCompleteStep} />}
      {completeStep === 2 && <Step3 setStep={setCompleteStep} />}
      {completeStep === 3 && <Step4 setStep={setCompleteStep} />}
      {completeStep === 4 && <Step5 setStep={setCompleteStep} />}
      {completeStep === 5 && <Step6 setStep={setCompleteStep}/>}
    </div>
  );
};

export default GetStarted;
