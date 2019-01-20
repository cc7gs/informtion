import {
    createStore,
    compose,
    applyMiddleware,
    combineReducers
} from 'redux'
import thunk from 'redux-thunk'
import user from '../redux/user.redux'

//结合reducer
const rootReducer=combineReducers({user});

//返回 仓库
export default createStore(
    rootReducer, compose(
        applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    ))