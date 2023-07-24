import styled from "styled-components";

export const StyledNavBar = styled.nav`

  gap: 1rem;
  font-family: var(--font-family-2);

  ul{
    display: flex;
    align-items: center;
  }

  a {
    display: flex;
    color: var(--color-grey-900);
    font-size: var(--font-size-regular);
    padding: 0.3rem 1.5rem;
    transition: 400ms;
    transition: transform 0.3s ease;
  }

  a:hover {
    display: flex;
    flex-direction: row;
    color: var(--color-primary);
    text-decoration: pointer;
    transform: scale(0.98);
  }

  .btn-logout{
    border: none;
    background-color: transparent;
    padding: 0.3rem 1.5rem;
    transition: 400ms;
    transition: transform 0.3s ease;
    transform: scale(1.5);

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .btn-logout:hover{
    transform: scale(1.4);
    color: var(--color-primary);
  }

  @media (max-width: 1023px) {
    ul{
        flex-direction: column;
        align-items: center;
        gap: 20px;
    }
  }
`;
