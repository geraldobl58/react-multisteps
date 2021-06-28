import React, { useContext } from 'react';

import { Button, TextField, Grid } from '@material-ui/core';

import { MultiStepContext } from '../../contexts/StepContext';

export default function ThirdStep() {
  const { 
    setCurrentStep, 
    userData, 
    setUserData, 
    submitData 
  } = useContext(MultiStepContext);

  return (
    <Grid style={{ textAlign: 'center' }}>
      <Grid>
        <TextField
          fullWidth 
          label="Cidade" 
          margin="normal" 
          variant="outlined" 
          color="secondary"
          value={(userData['city'])}
          onChange={(e) => setUserData({ ...userData, 'city' : e.target.value })} 
        />
      </Grid>
      <Grid>
        <TextField
          fullWidth 
          label="Ponto de referência" 
          margin="normal" 
          variant="outlined" 
          color="secondary"
          value={(userData['reference'])}
          onChange={(e) => setUserData({ ...userData, 'reference' : e.target.value })} 
        />
      </Grid>
      <Grid>
        <TextField
          fullWidth 
          label="Cep" 
          margin="normal" 
          variant="outlined" 
          color="secondary"
          value={(userData['zipcode'])}
          onChange={(e) => setUserData({ ...userData, 'zipcode' : e.target.value })} 
        />
      </Grid>
      <Grid>
        <Button 
          variant="contained" 
          color="secondary" 
          onClick={() => setCurrentStep(2)}
          >
            Voltar
        </Button>
        <Button 
          variant="contained" 
          color="primary" 
          onClick={submitData}
          >
            Finalizar
        </Button>
      </Grid>
    </Grid>
  )
}