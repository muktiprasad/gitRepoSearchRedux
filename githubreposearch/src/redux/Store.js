import { createStore, applyMiddleware } from 'redux';
import repoReducer from './Repo/RepoReducer';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const store = createStore (repoReducer,applyMiddleware(logger, thunk));

export default store;