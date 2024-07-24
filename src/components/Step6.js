import React from 'react';
import Button from './Button';

const Step6 = ({ nextStep, prevStep }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-8">Finding learning path recommendations for you based on your responses</h1>
      {/* <p className="text-lg mb-8">Learning paths based on your answers</p> */}
      <Button onClick={prevStep} className="bg-gray-500">Back</Button>
      <Button onClick={nextStep}>Continue</Button>
    </div>
  );
};

export default Step6;
