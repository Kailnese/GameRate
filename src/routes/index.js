import {
    Dashboard,
    GameList,
    AddNewGame,
    GameDetails,
    SmallGame
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
    pathname: '/admin/newgame',
    component: AddNewGame,
    title: 'Add New Game',
    isNav: true,
    icon: "folder-add"
},{
    pathname: '/admin/gamelist/:id',
    component: GameDetails,
    title: 'Game Details',
    isNav: false
},{
    pathname: '/admin/gameplay',
    component: SmallGame,
    title: `Game Play`,
    isNav: true,
    icon: `aliwangwang`
}]