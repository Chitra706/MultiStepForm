import React from 'react';
import Button from './Button';

const Step7 = ({ prevStep }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-8">Learning paths based on your answers</h1>
      <p className="text-lg mb-8">Choose one to get started. You can switch anytime</p>
      <p className="text-lg mb-8">Most Popular:-</p>
      <Button onClick={prevStep} className="bg-gray-500">Back</Button>
      <Button>Foundational Math Build your foundational skills in algebra, geometry, and probability</Button>
      <Button>Mathematical Thinking Build your foundational skills in algebra, geometry and probability.</Button>
    </div>
  );
};

export default Step7;
