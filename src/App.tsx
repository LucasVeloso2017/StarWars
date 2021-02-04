import React, { useEffect, useState } from 'react';
import Loading from './pages/Loading';
import Main from './pages/Main';
import GlobalStyle from './styles/global';
import 'animate.css'
import Routes from './routes';
function App() {

  const[isLoading,setLoading] = useState(true)

  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false)
    },3000)
  },[isLoading])


  return (
    <>
      <GlobalStyle/>
      {isLoading?<Loading/> : <Routes/>}
    </>
  );
}

export default App;
