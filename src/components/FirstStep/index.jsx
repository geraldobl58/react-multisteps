import React, { useContext } from 'react';

import { Button, TextField, Grid } from '@material-ui/core';

import { MultiStepContext } from '../../contexts/StepContext';

export default function FirstStep() {
  const { setCurrentStep, userData, setUserData } = useContext(MultiStepContext);
  
  return (
    <Grid>
      <Grid>
        <TextField
          fullWidth 
          label="Nome" 
          margin="normal" 
          variant="outlined" 
          color="secondary"
          value={(userData['firstname'])}
          onChange={(e) => setUserData({ ...userData, 'firstname' : e.target.value })}  
        />
      </Grid>
      <Grid>
        <TextField 
          fullWidth
          label="Sobrenome" 
          margin="normal" 
          variant="outlined" 
          color="secondary"
          value={(userData['lastname'])}
          onChange={(e) => setUserData({ ...userData, 'lastname' : e.target.value })}   
        />
      </Grid>
      <Grid>
        <TextField
          fullWidth 
          label="Telefone" 
          margin="normal" 
          variant="outlined" 
          color="secondary"
          value={(userData['phone'])}
          onChange={(e) => setUserData({ ...userData, 'phone' : e.target.value })}   
        />
      </Grid>
      <Grid>
        <Button 
          variant="contained" 
          color="primary"
          onClick={() => setCurrentStep(2)}
        >
          Próximo
        </Button>
      </Grid>
    </Grid>
  )
}