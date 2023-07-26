import styled from "styled-components";

export const StyledContactPage = styled.div`
    padding-top: 10vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: var(--font-family-default);

    .container__contacts-list{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 10px;

    }

    @media (max-width:1024px) {
        .container__contacts-list{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        max-width: 98vw;
        }
        h1{
            font-size: 20px;
        }
    }

    @media (max-width:710px) {
        .container__contacts-list{
        display: flex;
        flex-direction: column;
        }
    }
`;
