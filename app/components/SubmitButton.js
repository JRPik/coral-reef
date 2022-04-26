//FROM OUR THIRD-PARTIES
import React from 'react';
import { useFormikContext } from 'formik';

//FROM OUR CODE
import GreenButton from './GreenButton';

function SubmitButton({ title }) {
    const {handleSubmit} = useFormikContext();
    return (
        <GreenButton  title={title} onPress={handleSubmit}/>
    );
}

export default SubmitButton;