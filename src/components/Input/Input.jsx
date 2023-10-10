import { InputContainer } from "./Styles";

const Input = ({ value, onChange }) => {
  return (
    <InputContainer>
      <input
        value={value}
        onChange={onChange}
        placeholder="username/repository"
      />
    </InputContainer>
  );
};

export default Input;
