import styled from "styled-components";

export const StyledHeader = styled.header`
    display: flex;
    justify-content: space-around;
    align-items: center;

    width: 100%;
    
    height: 10vh;

    position: sticky;
    top: 0;
    z-index: 10;

    background-color: var(--color-grey-0);
    font-family: var(--font-family-2);

    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
    
    img {
        max-width: 5rem;
        cursor: pointer;
        max-height: 9vh;
        transition: 400ms;
    }
    img:hover{
        transform: scale(1.1);
        
    }

    .hamburger{
        display: none;
    }

    @media (max-width:1023px) {
        
       img {
        position: absolute;
        left: 5%;
       }
        .hamburger{
            display: block;
            position: absolute;
            right: 5%;
            cursor: pointer;
        }
        nav{
            flex-direction: column;
            background-color: var(--color-grey-0);
            gap: 20px;

            position: absolute;
            right: 0px;
            top: 10vh;

            width: 100%;
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