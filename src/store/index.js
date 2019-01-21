import {
    createStore,
    compose,
    applyMiddleware,
    combineReducers
} from 'redux'
import thunk from 'redux-thunk'
import user from '../redux/user.redux'
import chartUser from '../redux/chart.redux'
//结合reducer
const rootReducer=combineReducers({user,chartUser});

//返回 仓库
export default createStore(
    rootReducer, compose(
        applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    ))