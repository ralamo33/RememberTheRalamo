import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import * as Constants from '../../constants';
import Email from '../FormFields/Email';
import CheckHuman from '../FormFields/CheckHuman';
import FormFooter from '../FormFields/FormFooter';
import { randomEquationAndAnswer } from '../../utils';
import NewName from '../FormFields/NewName';

// eslint-disable-next-line react/prop-types
export default function ContestForm({ close }) {
  const [question, answer] = randomEquationAndAnswer();

  const ValidationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    newName: Yup.string().required('Required'),
    test: Yup.number('Invalid').min(answer, 'Incorrect').max(answer, 'Incorrect').required('You must pass the test'),
  });

  return (
    <div>
      <Formik
        initialValues={{
          email: '',
          test: '',
          newName: '',
        }}
        validationSchema={ValidationSchema}
        onSubmit={async (values) => {
          const apiUrl = `${Constants.CONTEST_API}&Message=${values.email}_${values.newName}`;
          axios.post(
            apiUrl, {}, {
              headers: { 'x-api-key': Constants.CONTEST_API_KEY },
            },
          ).catch((error) => alert(error))
            .then(alert(`Success! You submitted ${values.newName} into the naming contest.`))
            .then(close);
        }}
      >
        <Form>
          <NewName />
          <Email />
          <CheckHuman question={question} />
          <FormFooter close={close} />
        </Form>
      </Formik>
    </div>
  );
}
