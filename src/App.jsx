/* eslint-disable no-fallthrough */
/* eslint-disable default-case */
import React, { useContext } from 'react';

import { MultiStepContext } from './contexts/StepContext';

import { 
  Typography, 
  Grid,
  Stepper,
  StepLabel,
  Step 
} from '@material-ui/core';

import FirstStep from "./components/FirstStep";
import SecondStep from './components/SecondStep';
import ThirdStep from './components/ThirdStep';
import DisplatTable from './components/DisplatTable';

function App() {

  const { currentStep, finalData } = useContext(MultiStepContext);

  function showStep(step) {
    switch(step) {
      case 1:
        return <FirstStep />
      case 2:
        return <SecondStep />
      case 3:
        return <ThirdStep />
    }
  }

  return (
    <Grid style={{ textAlign: 'center', margin: '0 auto' }}>
      <Typography variant="h6">Reactjs MultiSteps</Typography>
      <Stepper activeStep={currentStep - 1} orientation="horizontal">
        <Step>
          <StepLabel>Step 1</StepLabel>
        </Step>
        <Step>
          <StepLabel>Step 2</StepLabel>
        </Step>
        <Step>
          <StepLabel>Step 3</StepLabel>
        </Step>
      </Stepper>
      {showStep(currentStep)}
      <Grid style={{ marginTop: '20px' }}>
        {finalData.length > 0 ? <DisplatTable /> : ''}
      </Grid>
    </Grid>
  );
}

export default App;
