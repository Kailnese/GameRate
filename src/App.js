import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { Provider } from 'react-redux'

import { adminRouter } from './routes'
import {Theme} from './component'
import store from './store'


const menus = adminRouter.filter(route => route.isNav === true)
export default class App extends Component {
    
    render() {
        return (
            <Theme menus={menus}>
                <Provider store={store}>
                    
                    <Switch>
                        {
                            adminRouter.map(route => {
                                return <Route 
                                        key={route.pathname}
                                        path={route.pathname}
                                        exact={route.exact}
                                        render={(routerProps) => {
                                            return <route.component {...routerProps}/>
                                        }}
                                        />
                            })
                        }
                        
                        <Redirect to={adminRouter[0].pathname} from="/admin" exact/>
                        <Redirect to="/404" />
                    </Switch>
                </Provider>
            </Theme>
            
        )
    }
}
