import { 
  TextField } from "@mui/material";
import { IPlaceholder } from "../../interface/propsComponents";
import { InputStyled } from "./style";
import { useState } from "react"

const InputText = ({
  label,
  placeholder,
  color,
  rows,
  maxRows,
  multiline,
  variant,
  required,
  type,
  disabled,
  setFunction
}: IPlaceholder) => {

  const [textInput, setTextInput] = useState('');

  return (
    <InputStyled>
      {label && <label>{label}</label>}
      <TextField
        rows={rows}
        placeholder={placeholder}
        required={required}
        color={color}
        maxRows={maxRows}
        variant={variant}
        multiline={multiline}
        type={type}
        disabled={disabled}
        value={textInput}
        onChange={(e) => { 
          setFunction(e.target.value)
          setTextInput(e.target.value)
        }}

      />
    </InputStyled>
  );
};

export { InputText };
