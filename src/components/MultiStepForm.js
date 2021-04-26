import React from 'react';
import { useForm, useStep } from 'react-hooks-helper';

import { Names, Address, Contact, Submit, Review } from './stepForm';

const defaultData = {
  firstName: '',
  lastName: '',
  nickName: '',
  country: '',
  city: '',
  state: '',
  zip: '',
  phone: '',
  email: '',
};

const steps = [
  {
    id: 'names',
  },
  {
    id: 'address',
  },
  {
    id: 'contacts',
  },
  {
    id: 'review',
  },
  {
    id: 'submit',
  },
];

const MultiStepForm = () => {
  const [formData, setForm] = useForm(defaultData);
  const { step, navigation } = useStep({
    steps,
    initialStep: 0,
  });

  const props = { formData, setForm, navigation };

  switch (step.id) {
    case 'names':
      return <Names {...props} />;
    case 'address':
      return <Address {...props} />;
    case 'contacts':
      return <Contact {...props} />;
    case 'review':
      return <Review {...props} />;
    case 'submit':
      return <Submit {...props} />;
  }

  return (
    <div>
      <h1>MultiStepForm</h1>
    </div>
  );
};

export default MultiStepForm;
