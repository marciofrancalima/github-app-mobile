import { createAppContainer, createStackNavigator } from 'react-navigation';

import Main from './pages/Main';
import User from './pages/User';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main,
      User,
    },
    {
      headerLayoutPreset: 'center', // Alinha ao centro (no Android)
      headerBackTitleVisible: false, // Ocultar o voltar (iOS)
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#4a90e2',
        },
        headerTintColor: '#FFF',
      },
    }
  )
);

export default Routes;
