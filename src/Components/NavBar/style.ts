import styled from "styled-components";

export const StyledNavBar = styled.nav`
  display: flex;
  gap: 1rem;
  font-family: var(--font-family-2);

  a {
    display: flex;
    flex-direction: row;
    color: var(--color-grey-900);
    text-decoration: none;
    font-size: var(--font-size-regular);
    padding: 0.3rem 1.5rem;
    border: 1px solid transparent;
    transition: 400ms;
    transition: transform 0.3s ease;
    border-radius: 3px;
  }

  a:hover {
    display: flex;
    flex-direction: row;
    color: var(--color-primary);
    text-decoration: pointer;
    transform: scale(1.1);
  }

  .login-btn {
    text-decoration: none;
    background-color: var(--color-grey-0);
    color: var(--color-primary);

    font-size: var(--font-size-regular);
    padding: 0.3rem 1.5rem;
    border-radius: var(--border-radius-default);
    border: 1px solid var(--color-primary);
    transition: transform 0.3s ease;
    box-shadow: var(--color-primary) 5px 5px;
    font-weight: 600;
  }

  .login-btn:hover {
    color: var(--color-primary);
    border: 1px solid var(--color-primary);
    background-color: #ffcc33;
    transform: scale(1.1);
  }
  .btn-logout{
    border: none;
    background-color: transparent;
    transition: 400ms;
    transition: transform 0.3s ease;
    transform: scale(1.5);

    display: flex;
    align-items: center;
    justify-content: center;
  }
  .btn-logout:hover{
    transform: scale(1.6);
  }
  .avatar{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media (max-width: 1023px) {
    .login-btn {
      font-size: var(--font-size-big);
      padding: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: var(--color-grey-0);
      color: var(--color-grey-900);
      border: none;
      font-weight: 400;
      box-shadow: none;
      text-transform: inherit;
    }
    .login-btn:hover {
      border: none;
      background-color: transparent;
      color: var(--color-primary);
    }
  }

  @media (min-width: 1023px) {
    .login-btn {
      text-transform: uppercase;
    }
  }
`;
