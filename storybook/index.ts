import { getStorybookUI, configure } from '@storybook/react-native';
// Remove the AppRegistry import to avoid duplicate registration
// import { AppRegistry } from 'react-native';
// import { name as appName } from '../app.json';

// 👇 Auto-include eller direkte imports
configure(() => {
  // Use both stories
  require('./stories/test.stories.jsx');
  require('./stories/button.stories.jsx');
}, module);

const StorybookUIRoot = getStorybookUI({});

// Remove this line as it's also being registered in the main index.js
// AppRegistry.registerComponent(appName, () => StorybookUIRoot);

export default StorybookUIRoot;
