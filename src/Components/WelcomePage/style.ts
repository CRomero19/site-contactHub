import styled from "styled-components";

export const StyledWelcomePage = styled.div`
    background-color: var(--color-primary-100);
    height: 100vh;
    
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 50px;
    font-family: var(--font-family-default);
    div{
        max-width: 600px;
    }
    .form{
        color: var(--color-grey-0);
        height: 100vh;
        background-color: var(--color-primary-500);
        display: flex;
        align-items: center;
        max-width: 90vw;
    }
    @media (max-width:1024px) {
        flex-direction: column;
        .text{
            display: none;
        }
    }
`;  
