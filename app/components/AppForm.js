import React from 'react';
import {  } from 'react-native';
import { Formik } from 'formik';

function AppForm({ children, initialValues, onSubmit, validationSchema}) {
    return (
    <Formik
        initialValues={{initialValues}}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        { () => (<>{children}</>)}
      </Formik>
    );
}

export default AppForm;