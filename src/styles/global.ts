import { createGlobalStyle } from 'styled-components';
 
import Stars from '../assets/stars.jpg'
const GlobalStyle = createGlobalStyle`
    @import url('//db.onlinewebfonts.com/c/c00548f5d217ed324ae9096051927001?family=STARWARS');
    @import url('https://fonts.googleapis.com/css?family=News+Cycle:400,700');
    *{
      margin:0;
      padding:0; scroll-behavior: smooth;  
    }
    body{
    }
    @font-face {font-family: "STARWARS"; src: url("//db.onlinewebfonts.com/t/c00548f5d217ed324ae9096051927001.eot"); src: url("//db.onlinewebfonts.com/t/c00548f5d217ed324ae9096051927001.eot?#iefix") format("embedded-opentype"), url("//db.onlinewebfonts.com/t/c00548f5d217ed324ae9096051927001.woff2") format("woff2"), url("//db.onlinewebfonts.com/t/c00548f5d217ed324ae9096051927001.woff") format("woff"), url("//db.onlinewebfonts.com/t/c00548f5d217ed324ae9096051927001.ttf") format("truetype"), url("//db.onlinewebfonts.com/t/c00548f5d217ed324ae9096051927001.svg#STARWARS") format("svg"); }

    @-webkit-keyframes fade-in-out {
    0%   { opacity:0; }
    16%  { opacity:1; }
    84%  { opacity:1; }
    100% { opacity:0; }
  }
  @-webkit-keyframes logo {
    0%   { -webkit-transform: translateZ(0);         opacity:0;  }
    0.1% { -webkit-transform: translateZ(0);         opacity:1;  }
    50%  { -webkit-transform: translateZ(-50000px);  opacity:1;  }
    60%  { -webkit-transform: translateZ(-60000px);  opacity:0;  }
    100% { -webkit-transform: translateZ(-100000px); opacity:0;  }
  }
  @-webkit-keyframes crawl {
    0%   { -webkit-transform: rotateX(80deg) translateZ(200px) translateY(1100px);  opacity:1; }
    40%  { -webkit-transform: rotateX(80deg) translateZ(200px) translateY(-340px);  opacity:1; }
    80%  { -webkit-transform: rotateX(80deg) translateZ(200px) translateY(-1780px); opacity:0; }
    100% { -webkit-transform: rotateX(80deg) translateZ(200px) translateY(-2500px); opacity:0; }
  }
    /* width */
  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1; 
  }
  
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #FFE81F; 
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #FFE81F; 
  }
`;
 
export default GlobalStyle;