import { createStore, applyMiddleware, Store } from 'redux';
import { reducers } from './reducers';
import { AppState } from './types';

export const store: Store<AppState> = createStore(reducers, {}, applyMiddleware());
