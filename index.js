import { AppRegistry } from 'react-native';
import App from './App';
// import StorybookUIRoot from './storybook';
import { name as appName } from './app.json';

// Completely disable Storybook for now
// const SHOW_STORYBOOK = __DEV__ && true;

// Register the main app only
AppRegistry.registerComponent(appName, () => App);
