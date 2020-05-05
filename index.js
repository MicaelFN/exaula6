/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import ValidateWithPrototype from './src/validateWithProptype'

AppRegistry.registerComponent(appName, () => ValidateWithPrototype);
