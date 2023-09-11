import React from "react";
import { useFormikContext } from "formik";

import AppNativePicker from "../AppNativePicker";
import ErrorMessage from "./ErrorMessage";

function AppNativeFormPicker({ selectOptions, name }) {
  const { errors, setFieldValue, touched, values } = useFormikContext();
  console.log("wrf: ", values);
  return (
    <>
      <AppNativePicker
        selectOptions={selectOptions}
        onSelectItem={(selectOption) => setFieldValue(name, selectOption)}
        //onSelectItem={setFieldValue}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppNativeFormPicker;
