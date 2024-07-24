import React from 'react';
import Button from './Button';

const Step4 = ({ nextStep, prevStep }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-8">What is your math comfort level?</h1>
      <p className="text-lg mb-8">Choose the highest level you feel confident in - you can always adjust later</p>
      <div className="flex flex-col space-y-4">
        <Button onClick={prevStep} className="bg-gray-500">Back</Button>
        <Button onClick={nextStep}>Arithmetic</Button>
        <Button onClick={nextStep}>Basic Algebra</Button>
        <Button onClick={nextStep}>Intermediate Algebra</Button>
        <Button onClick={nextStep}>Calculus</Button>
        <Button onClick={nextStep}>Advanced</Button>
      </div>
    </div>
  );
};

export default Step4;
