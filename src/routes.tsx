import * as React from 'react';
import {
    Route,
    Switch,
} from 'react-router-dom';

import Demo from './containers/demo';

const routes = (
    <Switch>
        <Route path="/"     exact={true} component={Demo}/>
        <Route path="/demo" component={Demo}/>
    </Switch>
);

export default routes;