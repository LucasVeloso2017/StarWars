import styled from 'styled-components';

import Stars from '../../assets/stars.jpg'
export const Container = styled.div`
  width:100%;
  height:100vh; 
  display:flex;
  flex-direction:column;
  justify-content:space-around;
  align-items:center;
  
  .stretch {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    position: absolute;
    overflow: hidden;
  }
  #crawl-container {
    perspective: calc(100vh * 0.4);
  }
  #crawl {
    color: #f5c91c;
    position: absolute;
    width: 110%;
    left: -5%;
    bottom: -5%;
    height: 200%;
    overflow: hidden;

    transform: rotate3d(1, 0, 0, 45deg);
    transform-origin: 50% 100%;

    mask-image: linear-gradient(
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.66),
      rgba(0, 0, 0, 1)
    );

    -webkit-mask-image: -webkit-linear-gradient(
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.66),
      rgba(0, 0, 0, 1)
    );
  }

  #crawl-content {
    font-family: "Roboto";
    font-size: calc(100vw * 0.074);
    letter-spacing: 0.09em;
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
  }

  #crawl p {
    text-align: justify;
    width: 100%;
    margin: 0 0 1.25em 0;
    line-height: 1.25em;
  }

  #crawl h1 {
    font-size: 1em;
    margin: 0 0 0.3em 0;
  }

  #crawl h2 {
    font-size: 1.5em;
    margin: 0 0 0.7em 0;
  }

  #crawl h1,
  #crawl h2 {
    text-align: center;
  }

  img{
    width:400px;
  }
`;
