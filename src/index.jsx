import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import MultiStepContext from './contexts/StepContext';

ReactDOM.render(
    <MultiStepContext>
      <App />
    </MultiStepContext>,
  document.getElementById('root')
);
