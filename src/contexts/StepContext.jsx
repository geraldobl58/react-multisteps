import React, { useState, createContext } from 'react';

export const MultiStepContext = createContext();

const StepContext = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [userData, setUserData] = useState([]);
  const [finalData, setFinalData] = useState([]);

  function submitData() {
    setFinalData(finalData => [...finalData, userData]);
    setUserData('');
    setCurrentStep(1);
  }

  return (
    <MultiStepContext.Provider value={{ 
        currentStep, 
        setCurrentStep, 
        userData, 
        setUserData, 
        finalData, 
        setFinalData,
        submitData
      }}
    >
      {children}
    </MultiStepContext.Provider>
  )
}

export default StepContext;