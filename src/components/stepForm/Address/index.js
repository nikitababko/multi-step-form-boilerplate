import React from 'react';
import { Container, TextField, Button } from '@material-ui/core';

const Address = ({ formData, setForm, navigation }) => {
  const { country, city, state, zip } = formData;

  console.log(navigation);

  return (
    <Container maxWidth="xs">
      <h3>Address</h3>
      <TextField
        label="Country"
        name="country"
        value={country}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />
      <TextField
        label="City"
        name="city"
        value={city}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />
      <TextField
        label="State"
        name="state"
        value={state}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />
      <TextField
        label="Zip"
        name="zip"
        type="number"
        value={zip}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />

      <div style={{ marginTop: '1rem' }}>
        <Button
          variant="contained"
          color="secondary"
          style={{ marginRight: '1rem' }}
          onClick={() => navigation.previous()}
        >
          Back
        </Button>
        <Button variant="contained" color="primary" onClick={() => navigation.next()}>
          Next
        </Button>
      </div>
    </Container>
  );
};

export default Address;
