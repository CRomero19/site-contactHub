import styled from "styled-components";

export const StyledModalDeleteUser = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgb(0,0,0,0.5);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;

  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-family-default);
  .container__modal{
    background-color: white;
    color:var(--color-grey-900);
    padding: 50px;
  }
  
  @media (max-width: 1023px) {
    
  }
`;
