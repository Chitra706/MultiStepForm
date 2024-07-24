import React from 'react';
import Button from './Button';

const Step1 = ({ nextStep }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-8">Which describes you best?</h1>
      <p className="text-lg mb-8"> This will help us personalize your experience.  </p>

      <div className="flex flex-col space-y-4">
        <Button onClick={nextStep}>A. Student or soon to be enrolled</Button>
        <Button onClick={nextStep}>B. Professional pursuing a career</Button>
        <Button onClick={nextStep}>C. Parent of a school-age child</Button>
        <Button onClick={nextStep}>D. Lifelong farmer</Button>
        <Button onClick={nextStep}>E. Teacher</Button>
        <Button onClick={nextStep}>F. Other</Button>
      </div>
    </div>
  );
};

export default Step1;
