import React from "react";
import { useFormikContext } from "formik";

import AppTextInput from "./AppTextInput";
import ErrorMessage from "./ErrorMessage";

function AppFormField({ name, ...otherProps }) {
  const { handleChange, setFieldTouched, errors, touched } = useFormikContext();
  return (
    <>
      <AppTextInput
        //   icon="email"
        //   placeholder="email"
        //   autoCapitalize="none"
        //   autoCorrect={false}
        //   keyboardType="email-address"
        //   textContentType="emailAddress"
        onChangeText={handleChange(name)}
        onBlur={() => setFieldTouched(name)}
        {...otherProps}
      />
      <ErrorMessage errorMsg={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormField;
