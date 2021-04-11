import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { adminRouter } from './routes'
import {Theme} from './component'
import { Games } from './dummyDB'

const menus = adminRouter.filter(route => route.isNav === true)
export default class App extends Component {
    addComment = {}
    
    render() {
        return (
            <Theme menus={menus}>
                <Switch>
                    {
                        adminRouter.map(route => {
                            return <Route 
                                    key={route.pathname}
                                    path={route.pathname}
                                    exact={route.exact}
                                    render={(routerProps, data) => {
                                        return <route.component {...routerProps} data={Games}/>
                                    }}
                                    />
                        })
                    }
                    
                    <Redirect to={adminRouter[0].pathname} from="/admin" exact/>
                    <Redirect to="/404" />
                </Switch>
            </Theme>
            
        )
    }
}
