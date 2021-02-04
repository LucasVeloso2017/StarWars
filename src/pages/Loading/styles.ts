import styled from 'styled-components';
import Stars from '../../assets/stars.jpg'

export const Container = styled.div`
    background-image:url(${Stars});
    width:100%;
    height:100vh;

    display:flex;
    justify-content:center;
    align-items:center;
`; 
export const Text = styled.h1`
    font-family: "News Cycle", sans-serif;
    color: #00BFFF;
    font-weight: 400;
    letter-spacing: .1em;
    -webkit-animation: fade-in-out 10s linear;
`;  
