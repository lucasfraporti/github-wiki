import { ButtonContainer } from "./Styles";

const Button = ({ onClick }) => {
  return (
    <ButtonContainer onClick={onClick}>Adicionar repositório</ButtonContainer>
  );
};

export default Button;
