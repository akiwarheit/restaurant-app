import {createStore, combineReducers} from 'redux';
import {itemReducer} from '../../domain/item/reducers';
import {menuReducer} from '../../domain/menu/reducers';
import {activityReducer} from '../../domain/activity/reducers';
import Reactotron from '../reactotron';
import AsyncStorage from '@react-native-community/async-storage';
import {persistReducer, persistStore} from 'redux-persist';

const persistConfigFactory = (key: string) => ({
  key,
  storage: AsyncStorage,
});

const p = (reducer, key) => persistReducer(persistConfigFactory(key), reducer);

const reducers = combineReducers({
  items: p(itemReducer, 'item'),
  menus: p(menuReducer, 'menu'),
  activity: p(activityReducer, 'activity'),
});

export const Store = createStore(reducers, Reactotron.createEnhancer());
export const Persistor = persistStore(Store);
