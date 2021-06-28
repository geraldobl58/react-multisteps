import React, { useContext } from 'react';

import { MultiStepContext } from '../../contexts/StepContext';

import {
  TableContainer,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  Table,
  Grid
} from '@material-ui/core';


export default function DisplatTable() {
  const { finalData } = useContext(MultiStepContext);

  return (
    <Grid>
      <Grid>
        <TableContainer>
          <Table size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>Nome</TableCell>
                <TableCell>Sobrenome</TableCell>
                <TableCell>Telefone</TableCell>
                <TableCell>E-mail</TableCell>
                <TableCell>País</TableCell>
                <TableCell>Estado</TableCell>
                <TableCell>Cidade</TableCell>
                <TableCell>Referência</TableCell>
                <TableCell>Cep</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {finalData.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>{item.firstname}</TableCell>
                  <TableCell>{item.lastname}</TableCell>
                  <TableCell>{item.phone}</TableCell>
                  <TableCell>{item.email}</TableCell>
                  <TableCell>{item.country}</TableCell>
                  <TableCell>{item.district}</TableCell>
                  <TableCell>{item.city}</TableCell>
                  <TableCell>{item.reference}</TableCell>
                  <TableCell>{item.zipcode}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  )
}