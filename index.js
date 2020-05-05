/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import ValidateWithPrototype from './src/validateWithProptype';
import SideEffects from './src/sideEffects';
import interpolateJSX from './src/interpolateJSX'

AppRegistry.registerComponent(appName, () => interpolateJSX);
