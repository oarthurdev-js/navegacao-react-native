import { registerRootComponent } from 'expo';


import Navegacao from './src/navegacao';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately
registerRootComponent(Navegacao);
