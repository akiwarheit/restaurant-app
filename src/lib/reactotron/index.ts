import Reactotron from 'reactotron-react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {reactotronRedux} from 'reactotron-redux';
import {Store} from '../redux';
import {setMenus} from '../../domain/menu/reducers';
import {setBusy, setError} from '../../domain/activity/reducers';

const reactotron = Reactotron.setAsyncStorageHandler(AsyncStorage) // AsyncStorage would either come from `react-native` or `@react-native-community/async-storage` depending on where you get it from
  .configure() // controls connection & communication settings
  .use(reactotronRedux())
  .useReactNative() // add all built-in react native plugins
  .connect(); // let's connect!

Reactotron.onCustomCommand({
  command: 'Set menus',
  title: 'Set menus',
  description: 'Set menus',
  handler: () => {
    Store.dispatch(setMenus([{hi: 'true'}]));
  },
});

Reactotron.onCustomCommand({
  command: 'Set activity',
  title: 'Set activity',
  description: 'Set activity',
  handler: () => {
    Store.dispatch(setBusy(false));
    Store.dispatch(setError('This is a test'));
  },
});

export default reactotron;
