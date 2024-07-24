import React from 'react';
import Button from './Button';

const Step3 = ({ nextStep, prevStep }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-8">You're in the right place</h1>
      <p className="text-lg mb-8">Brilliant gets you hands-on to help improve your professional skills and knowledge. You'll interact with concepts and solve fun problems in math, science, and computer science.</p>
      <Button onClick={prevStep} className="bg-gray-500">Back</Button>
      <Button onClick={nextStep}>Continue</Button>
    </div>
  );
};

export default Step3;
