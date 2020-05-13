import {createStore, combineReducers} from 'redux';
import {itemReducer} from '../../domain/item/reducers';
import {menuReducer} from '../../domain/menu/reducers';
import {activityReducer} from '../../domain/activity/reducers';
import Reactotron from '../reactotron';

const reducers = combineReducers({
  items: itemReducer,
  menus: menuReducer,
  activity: activityReducer,
});

export const Store = createStore(reducers, Reactotron.createEnhancer());
