import {
    Dashboard,
    GameList,
    UserInfo,
    GameDetails
} from '../views'

export const adminRouter = [{
    pathname: '/admin/dashboard',
    component: Dashboard,
    title: 'Dashboard',
    isNav: true,
    icon: "dashboard"
},{
    pathname: '/admin/gamelist',
    component: GameList,
    title: 'GameList',
    isNav: true,
    icon: "unordered-list",
    exact: true
},{
    pathname: '/admin/userinfo',
    component: UserInfo,
    title: 'User Information',
    isNav: true,
    icon: "setting"
},{
    pathname: '/admin/gamelist/:id',
    component: GameDetails,
    title: 'Game Details',
    isNav: false
}]