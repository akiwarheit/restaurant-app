import AsyncStorage from '@react-native-community/async-storage';
import {persistReducer} from 'redux-persist';

const persistConfigFactory = (key: string) => ({
  key,
  storage: AsyncStorage,
});

/**
 * Persist reducer based on a predefined config
 *
 * @param reducer - The reducer to persist
 * @param key - The key
 * @param config? - Optional config, will override the default `persistConfigFactory(key)` impl
 */
export const p = (reducer, key, config?) =>
  persistReducer(config || persistConfigFactory(key), reducer);
