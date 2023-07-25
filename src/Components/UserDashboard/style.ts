import styled from "styled-components";

export const StyledHeader = styled.header`
    display: flex;
    justify-content: space-around;
    align-items: center;

    width: 100%;
    
    height: 10vh;

    position: absolute;
    top: 0;
    z-index: 2;

    font-family: var(--font-family-default);

    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
    background-color: var(--color-grey-0);
    .logo{
        cursor: pointer;
    }

    .hamburger{
        display: none;
    }

    @media (max-width:1023px) {
        
        .hamburger{
            display: block;
            cursor: pointer;
        }
        nav{
            flex-direction: column;
            background-color: var(--color-grey-0);
            gap: 20px;

            position: absolute;
            right: 0px;
            top: 10vh;

            width: 100vw;
            height: 100vh;

            a{
                font-size: var(--font-size-big);
                padding: 20px;
                display: flex;
                align-items: center;
                justify-content: center;
            }
        }
        .visible{
            display: flex;
            
        }
        .hidden{
            display: none;
        }
        
    }
`;