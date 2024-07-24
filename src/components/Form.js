import React, { useState } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import Step5 from './Step5';
import Step6 from './Step6';
import Step7 from './Step7';

const Form = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return <Step1 nextStep={nextStep} />;
      case 2:
        return <Step2 nextStep={nextStep} prevStep={prevStep} />;
      case 3:
        return <Step3 nextStep={nextStep} prevStep={prevStep} />;
      case 4:
        return <Step4 nextStep={nextStep} prevStep={prevStep} />;
      case 5:
        return <Step5 nextStep={nextStep} prevStep={prevStep} />;
      case 6:
        return <Step6 nextStep={nextStep} prevStep={prevStep} />;
      case 7:
        return <Step7 prevStep={prevStep} />;
      default:
        return null;
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-8 p-4 bg-gray-100 rounded-md">
      {renderStep()}
    </div>
  );
};

export default Form;
