import React, { useContext } from 'react';

import { Button, TextField, Grid } from '@material-ui/core';

import { MultiStepContext } from '../../contexts/StepContext';

export default function SecondStep() {
  const { setCurrentStep, userData, setUserData } = useContext(MultiStepContext);

  return (
    <Grid style={{ textAlign: 'center' }}>
      <Grid>
        <TextField
          fullWidth 
          label="E-mail" 
          margin="normal" 
          variant="outlined" 
          color="secondary"
          value={(userData['email'])}
          onChange={(e) => setUserData({ ...userData, 'email' : e.target.value })}
        />
      </Grid>
      <Grid>
        <TextField
          fullWidth 
          label="País" 
          margin="normal" 
          variant="outlined" 
          color="secondary"
          value={(userData['country'])}
          onChange={(e) => setUserData({ ...userData, 'country' : e.target.value })} 
        />
      </Grid>
      <Grid>
        <TextField
          fullWidth 
          label="Estado" 
          margin="normal" 
          variant="outlined" 
          color="secondary" 
          value={(userData['district'])}
          onChange={(e) => setUserData({ ...userData, 'district' : e.target.value })}
        />
      </Grid>
      <Grid>
        <Button 
          variant="contained" 
          color="secondary" 
          onClick={() => setCurrentStep(1)}
          >
            Voltar
        </Button>
        <Button 
          variant="contained" 
          color="primary"
          onClick={() => setCurrentStep(3)}
        >
          Próximo
        </Button>
      </Grid>
    </Grid>
  )
}