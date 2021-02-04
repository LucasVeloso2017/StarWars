import styled from 'styled-components';

export const Container = styled.div`
    width:100%;
    height:13vh;

    display:flex;
    justify-content:flex-start;
    align-items:center;
    background-color:rgba(0,0,0,0.8);

    img{
        width:100px;
        margin:50px;
    }

    ul{
        display:flex;
        justify-content:center;
        align-items:center;
        
        li,a{
            list-style:none;
            padding:10px;
            margin:5px;

            color:#DCAF52;
            font-family: "News Cycle", sans-serif;
            font-size:16px;
            font-weight: 500;
            letter-spacing: .1em;
            text-decoration:none;
        }
    }
`;
