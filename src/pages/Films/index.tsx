import React from 'react';
import Header from '../../components/Header';

import { Chrono } from "react-chrono";
import { Container,ContainerTwo,ContainerThree } from './styles';
import { TimelineItemModel } from 'react-chrono/dist/models/TimelineItemModel';
import TimelineComponent from '../../components/TimelineComponent';
const Films: React.FC = () => {
    

    return(
        <>
            <Container>
                <Header/>
                <h2>A Saga</h2>
                <br/><br/><br/>
                <TimelineComponent/>
            </Container>
        </>
    );
}
export default Films;