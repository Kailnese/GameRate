import { createStore } from 'redux'
import reducers from './reducers'
import { Games } from './dummyDB'

export default createStore(reducers, {game_manage: Games});