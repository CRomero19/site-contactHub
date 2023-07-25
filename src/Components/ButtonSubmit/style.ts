import styled from "styled-components";

export const StyledButton = styled.button`
  border: 1px solid transparent;
  outline: none;
  border-radius: 24px;
  color: var(--color-grey-0);
  background-color:#F26363;
  padding: 10px;
  font-weight: 500;
  font-family: var(--font-family-default);
  transition: 400ms;
  &&:hover {
    box-shadow: 1px 1px 6px 0px rgba(0, 0, 0, 0.5);
    background-color: #F29F80;
    border: 1px solid #F29F80;
    transform: scale(1.02);
  }
`;
