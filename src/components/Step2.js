import React from 'react';
import Button from './Button';

const Step2 = ({ nextStep, prevStep }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-8">Which are you most interested in?</h1>
      <p className="text-lg mb-8">Choose just one. This will help us get you started (but won't limit your experience).</p>

      <div className="flex flex-col space-y-4">
        <Button onClick={prevStep} className="bg-gray-500">Back</Button>
        <Button onClick={nextStep}>Learning specific skills to advance my career</Button>
        <Button onClick={nextStep}>Exploring new topics I'm interested in</Button>
        <Button onClick={nextStep}>Refreshing my math foundations</Button>
        <Button onClick={nextStep}>Exercising my brain to stay sharp</Button>
        <Button onClick={nextStep}>Something else</Button>
      </div>
    </div>
  );
};

export default Step2;
