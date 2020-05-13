import Reactotron from 'reactotron-react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {reactotronRedux} from 'reactotron-redux';
import {Store} from '../redux';
import {setMenus} from '../../domain/menu/reducers';

const reactotron = Reactotron.setAsyncStorageHandler(AsyncStorage) // AsyncStorage would either come from `react-native` or `@react-native-community/async-storage` depending on where you get it from
  .configure() // controls connection & communication settings
  .use(reactotronRedux())
  .useReactNative() // add all built-in react native plugins
  .connect(); // let's connect!

Reactotron.onCustomCommand({
  command: 'Test',
  title: 'Test',
  description: 'Test',
  handler: () => {
    Store.dispatch(setMenus([{hi: 'true'}]));
  },
});

export default reactotron;
