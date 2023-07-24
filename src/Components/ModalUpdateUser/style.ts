import styled from "styled-components";

export const StyledModalUpdateUser = styled.div`
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
  
  .container__modal{
    background-color: white;
    padding: 50px;
    position: relative;
  }
  .close-btn{
    position: absolute;
    top: 20px;
    right: 20px;
    border: none;
    background-color: transparent;
  }
  
  @media (max-width: 1023px) {
    
  }
`;
