import { FormInputLabel, Input, Group } from "./FormInput.styles.jsx";

const FormInput = ({ label, inputProps }) => {
  return (
    <Group>
      <Input {...inputProps} />
      {label && (
        <FormInputLabel shrink={inputProps.value.length}>
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};

export default FormInput;
