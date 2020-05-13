import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import {itemReducer} from '../../domain/item/reducers';
import {menuReducer} from '../../domain/menu/reducers';
import {activityReducer} from '../../domain/activity/reducers';
import Reactotron from '../reactotron';
import {persistStore} from 'redux-persist';
import createSagaMiddleware from 'redux-saga';

const reducers = combineReducers({
  items: itemReducer,
  menus: menuReducer,
  activity: activityReducer,
});

const sagaEnhancer = applyMiddleware(createSagaMiddleware());

export const Store = createStore(
  reducers,
  compose(
    Reactotron.createEnhancer(),
    sagaEnhancer,
  ),
);
export const Persistor = persistStore(Store);
