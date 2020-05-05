/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import ValidateWithPrototype from './src/validateWithProptype';
import SideEffects from './src/sideEffects';
import interpolateJSX from './src/interpolateJSX';
import ReusableExercise from './src/reusableComponent';
import EventHandlers from './src/eventHandlers';
import ErrorB from './src/errorBoundary';
import {FlatListBasics} from './src/handlingLists';
import LifeCycle from './src/lifeCycle'

AppRegistry.registerComponent(appName, () => LifeCycle);
