import styled from "styled-components";

export const StyledContactCard = styled.div`
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    gap:15px;

    background-color:var(--color-primary-lighter);
    color: var(--color-grey-300);

    padding: 15px;
    max-width: 90vw;

    font-family: var(--font-family-default);
    
    .hidden-modal-update-contact{
        display: none;
    }
    .visible-modal-update-contact{
        display: flex;
    }
    .hidden-modal-delete-contact{
        display: none;
    }
    .visible-modal-delete-contact{
        display: flex;
    }
    
    p{
      min-width: 30%;
    }
  @media (max-width: 1023px) {
    
  }
`;
