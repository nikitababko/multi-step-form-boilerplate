import React from 'react';
import { Container, TextField, Button } from '@material-ui/core';

const Contact = ({ formData, setForm, navigation }) => {
  const { phone, email } = formData;

  return (
    <Container maxWidth="xs">
      <h3>Contacts</h3>
      <TextField
        label="Phone"
        name="phone"
        type="number"
        value={phone}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />
      <TextField
        label="Email"
        name="email"
        value={email}
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

export default Contact;
