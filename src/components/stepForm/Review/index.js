import React from 'react';
import {
  Container,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  ListItemText,
  IconButton,
  Button,
} from '@material-ui/core';

import { Edit as EditIcon, ExpandMore as ExpandMoreIcon } from '@material-ui/icons';

const RenderAccordion = ({ summary, details, go }) => (
  <Accordion>
    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
      <h4>{summary}</h4>
    </AccordionSummary>
    <AccordionDetails>
      <div>
        {details.map((data, index) => {
          const objKey = Object.keys(data)[0];
          const objValue = data[Object.keys(data)[0]];

          return <ListItemText key={index}>{`${objKey}: ${objValue}`}</ListItemText>;
        })}
        <IconButton
          color="primary"
          component="span"
          onClick={() => go(`${summary.toLowerCase()}`)}
        >
          <EditIcon />
        </IconButton>
      </div>
    </AccordionDetails>
  </Accordion>
);

const Review = ({ formData, navigation }) => {
  const { go } = navigation;
  const {
    firstName,
    lastName,
    nickName,
    country,
    city,
    state,
    zip,
    phone,
    email,
  } = formData;

  return (
    <Container maxWidth="sm">
      <h3>Review</h3>
      <RenderAccordion
        summary="Names"
        details={[
          { 'First Name': firstName },
          { 'Last Name': lastName },
          { 'Nick Name': nickName },
        ]}
        go={go}
      />
      <RenderAccordion
        summary="Address"
        details={[{ Country: country }, { City: city }, { State: state }, { Zip: zip }]}
        go={go}
      />
      <RenderAccordion
        summary="Contacts"
        details={[{ Phone: phone }, { Email: email }]}
        go={go}
      />

      <Button
        variant="contained"
        color="primary"
        style={{ marginTop: '1rem' }}
        onClick={() => go('submit')}
      >
        Submit
      </Button>
    </Container>
  );
};

export default Review;
