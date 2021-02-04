import React from 'react';

import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Films from '../pages/Films';
import Main from '../pages/Main';

const Routes: React.FC = () => {
    return(
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Main}/>
            <Route path="/films" exact component={Films}/>
        </Switch>
        </BrowserRouter>
    );
}

export default Routes;