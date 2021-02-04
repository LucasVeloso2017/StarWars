import styled from 'styled-components';

import Stars from '../../assets/driven.png'
import Galaxy from '../../assets/landscape.jpg'
import Planet from '../../assets/planet.jpg'


export const Container = styled.div`
    width:100%;
    height:350vh;
    background-image:url(${Stars});
    background-repeat:no-repeat;
    background-size:cover;
    //position:relative;

    h2{
        position:absolute;
        text-align:center;
        color:#f9c501;
        font-family: "News Cycle", sans-serif;
        font-size:35px;
        font-weight: 500;
        letter-spacing: .1em;
        left:100px;
        top:100px;
    }
    .timeline{
        margin-top:100px;
    }
    //card
    .dIyntz,.timeline-card-content,.css-7krozn-TimelineItemContentWrapper{
      
        background-color:violet;
    }

    //div-texto
    .css-8v2xrm-MediaDetailsWrapper{
        background-color:red;
        width:10%;
    }

    //div foto
    .css-1567q53-MediaWrapper,.css-1567q53-MediaWrapper {
        width:10%;
        background-color:blue;
    }

    .css-x8kstq-TimelineCardTitle.active,.css-x8kstq-TimelineCardTitle {
        text-align:center;
        color:black;
        font-family: "News Cycle", sans-serif;
        font-size:18px;
        font-weight: 500;
        letter-spacing: .1em;
        display:none;

    }
    .css-1kcx0k2-TimelineContentSubTitle{
        text-align:center;
        color:black;
        font-family: "News Cycle", sans-serif;
        font-size:15px;
        font-weight: 500;
        letter-spacing: .1em;
        display:none;
    }

    .css-d0st9p-CardImage{
        width:100%;
        height:30vh;
        padding:10px;
        display:none;
    }

    .css-g89oe7-TimelineContentDetailsWrapper,.css-1r0flji-TimelineCardHeader{
        display:none;
    }

`;
export const ContainerTwo = styled.div`
    width:100%;
    height:150vh;
    background-image:url(${Galaxy});
    background-repeat:no-repeat;
    background-size:cover;
`;
export const ContainerThree = styled.div`
    width:100%;
    height:100vh;
    background-image:url(${Planet});
    background-repeat:no-repeat;
    background-size:cover;
`;
