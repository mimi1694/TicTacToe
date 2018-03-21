import { createStore, combineReducers, applyMiddleware } from 'redux';
import board from './Board';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension'

const reducer = combineReducers({
    board
})

const middleware = composeWithDevTools(applyMiddleware(
thunkMiddleware,
createLogger({collapsed: true})
))

const store = createStore(
  reducer, middleware
);

export default store;