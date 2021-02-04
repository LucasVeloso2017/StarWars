import React, { useEffect } from 'react';
import Header from '../../components/Header';

import { Container,Content,ContainerTwo } from './styles';

import Logo from '../../assets/imperial.png'
import Logo2 from '../../assets/logo.svg'
import Falcom from '../../assets/falcom.png'
import Tie from '../../assets/tie.png'


const Main: React.FC = () => {
    return(
        <>
        <Container>
            <Header/>

            <Content>
                <div className="container">
                    <img src={Logo} className="animate__animated animate__fadeInRight" alt=""/>
                </div>
            </Content>
            
        </Container>
        <ContainerTwo id="about">
            <img src={Falcom} alt="" className=""id="millenium-falcom"/>
            <img src={Tie} alt="" className="tie"/>
            <img src={Logo2} className="logo" alt=""/>

            <div className="quote">
                <span>
                    O Projeto <br/><br/>
                    Este é um projeto frontend feito por mim <strong>Lucas Veloso</strong> para continuar pondo em prática conceitos da web,
                    como um bom fã da saga <strong>Star Wars</strong> resolvi usar o titulo como tema do projeto.
                    <br/>
                    Visto em que o site oficial da saga não é tao intuitivo resolvi criar este como mais um de meus projetos pessoais.
                </span>
            </div>
            

        </ContainerTwo>
        </>
    )
}

export default Main;