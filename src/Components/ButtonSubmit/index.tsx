import { StyledButton } from "./style";

interface Props {
  text: string;
}

export const ButtonSubmit = ({ text }: Props) => {
  return <StyledButton type="submit">{text}</StyledButton>;
};
