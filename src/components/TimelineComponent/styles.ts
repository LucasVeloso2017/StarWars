import styled from 'styled-components';

export const Container = styled.div`
    width:80%;
    height:30vh;
    display:flex;
    justify-content:space-evenly;
    align-items:flex-start;
    
    img{
        width:150px; 
        height:30vh;
        border-radius:10px;
    }
    .description{
        display:flex;
        flex-direction:column;
        justify-content:flex-start;
        align-items:flex-start;

    }
`;
