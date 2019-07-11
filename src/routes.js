import { createAppContainer, createStackNavigator } from 'react-navigation';

import Main from './pages/Main';
import User from './pages/User';
import Repository from './pages/Repository';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main,
      User,
      Repository,
    },
    {
      headerLayoutPreset: 'center', // Center alignment (Android)
      headerBackTitleVisible: false, // Hide text back (iOS)
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
