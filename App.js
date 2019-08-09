import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import Login from './screens/login';
import Home from './screens/home';
import CameraCV from './screens/cameraCV';
import Discipline from './screens/discipline';
import ImageViewer from './screens/imageViewer';

// import DisciplineService from './app/services/DisciplineService';
// import Discipline from './app/domain/discipline';
// let discipline = new Discipline(null, 'Compiladores', 'Malopes', 7);
// DisciplineService.insertDiscipline(discipline);
// DisciplineService.getAll();


const AppNavigator = createStackNavigator({
  LoginScreen: { screen: Login },
  HomeScreen: { screen: Home },
  CameraScreen: {screen: CameraCV},
  DisciplineScreen: {screen: Discipline},
  ImageViewerScreen: {screen: ImageViewer}
});

const App = createAppContainer(AppNavigator);

export default App;