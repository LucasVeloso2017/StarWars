import styled from 'styled-components';
import Vader from '../../assets/vader.png'
import Star from '../../assets/landscape.jpg'

export const Container = styled.div`
    width:100%;
    height:100vh;
    background-image:url(${Vader});
    background-repeat:no-repeat;
    background-size:cover;
`;

export const Content = styled.div`
    width:100%;
    height:87vh;

    display:flex;
    flex-direction:column;
    align-items:flex-end;
    justify-content:center;

    img,.container{
        margin:20px 100px;
        width:350px;
    }

    img{
        position:relative;
    }


    .container{
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        span{
            position:absolute;
            text-align:center;
            color:#ff0000;
            font-family: "News Cycle", sans-serif;
            font-size:25px;
            font-weight: 500;
            letter-spacing: .1em;
        }
    }
`;

export const ContainerTwo = styled.div`
    width:100%;
    height:100vh;
    background-image:url(${Star});
    background-repeat:no-repeat;
    background-size:cover;

    position:relative;

    #millenium-falcom{
        position:absolute;

        width:160px;
        -webkit-transform: scaleX(-2);
        transform: scaleX(-1);
        transform: perspective(900px) rotateY(210deg);
        transform-style: preserve-3d;
        right:500px;
        top:100px;
    }
    .tie{
        position:absolute;

        width:250px;
        right:100px;
        top:200px;
    }

    .logo{
        position:absolute;
        width:300px;
        left:100px;
        top:100px;
    }
    .quote{
        position:absolute;
        left:100px;
        top:250px;
        width:400px;

        span{
            font-family: "News Cycle", sans-serif;
            color:white;
            font-size:18px;
            font-weight: 500;
            letter-spacing: .1em;
        }

        strong{
            color:#f9c501;
        }
    }
`;
