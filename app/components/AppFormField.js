//FROM OUR THIRD-PARTIES
import React from 'react';
import { useFormikContext } from 'formik';

//FROM OUR CODE
import ApptTextInput from './ApptTextInput';
import ErrorMessage from './ErrorMessage';

//<> </> are used because you can only use a single component and
//right now we are using two input and error. so doing this will
//allow you to do this.
function AppFormField({ name, ...otherProps }) {
    const {errors, handleChange, setFiedTouched, touched} =useFormikContext();

    return (
        <>
            <ApptTextInput
                //before when you typed in the email input it would bring
                //up both errors but with the following it will only bring
                //the one that you are clicked in
                onBlur={() => setFiedTouched(name)}
                onChangeText = {handleChange(name)}
                {...otherProps}
            />
            {<ErrorMessage error={errors[name]} visible={touched[name]}/>}
        </>
    );
}

export default AppFormField;