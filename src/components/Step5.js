import React from 'react';
import Button from './Button';

const Step5 = ({ nextStep, prevStep }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-8">You're on your way!</h1>
      <p className="text-lg mb-8">"Through its engaging and well-structured courses, Brilliant has taught me mathematical concepts that I previously struggled to understand. I now feel confident approaching both technical job interviews and real world problem solving situations."</p>
      <Button onClick={prevStep} className="bg-gray-500">Back</Button>
      <Button onClick={nextStep}>Continue</Button>
    </div>
  );
};

export default Step5;
