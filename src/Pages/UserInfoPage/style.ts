import styled from "styled-components";

export const StyledUserInfoPage  = styled.div`
  padding-top: 10vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .hidden-modal-delete{
    display: none;
  }
  .visible-modal-delete{
    display: flex;
  }
  .hidden-modal-update{
    display: none;
  }
  .visible-modal-update{
    display: flex;
  }
  .container__user-info{
      display: flex;
      flex-direction: column;
      gap: 10px;
  }
  .container__user-info p{
    align-self: center;
    justify-self: center;
  }
`;