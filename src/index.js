import { render } from 'react-dom'
import { HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom'

import App from './App'
import './index.less'

render(
    <Router>
        <Switch>
            <Route path="/admin" render={(routerProps) => {
                return <App {...routerProps}/>
            }}/>
            <Redirect to='/admin' from="/" exact />
            <Redirect to='/404' />
        </Switch>
    </Router>
    ,
    document.querySelector('#root')
)