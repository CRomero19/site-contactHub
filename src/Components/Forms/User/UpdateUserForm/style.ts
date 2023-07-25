import styled from "styled-components";

export const StyledUpdateUserForm = styled.div`
  padding: 30px;
  width: 500px;
  max-width: 90%;
  margin: 0 auto;
  font-family: var(--font-family-default);
  color: var(--color-grey-900);
  h1 {
    margin-bottom: 2rem;
    font-size: 18px;
    font-weight: 500;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 10px;

    border-radius: var(--border-radius-default);
  }

  p {
    color: var(--color-grey-0);
  }

  input {
    border: 1px solid black;
    padding: 20px;
    width: 90%;
    border-radius: 8px;
  }

  @media (max-width: 1023px) {
    h1 {
      font-size: 2rem;
    }
  }
`;
