import React, { InputHTMLAttributes } from "react";
import { useField } from "formik";
import FormLabel from "@chakra-ui/core/dist/FormLabel";
import FormErrorMessage from "@chakra-ui/core/dist/FormErrorMessage";
import FormControl from "@chakra-ui/core/dist/FormControl";
import { Input } from "@chakra-ui/core/dist";

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  name: string;
  textarea?: boolean;
};

const InputField: React.FC<InputFieldProps> = ({
  label,
  textarea,
  size: _,
  ...props
}) => {
  const [field, { error }] = useField(props);
  return (
    <FormControl isInvalid={!!error}>
      <FormLabel htmlFor={props.name}>{label}</FormLabel>
      <Input {...field} {...props} id={props.name} />
      {error ? <FormErrorMessage>{error}</FormErrorMessage> : null}
    </FormControl>
  );
};

export default InputField;
