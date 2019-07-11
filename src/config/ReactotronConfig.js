import Reactotron from 'reactotron-react-native';

// Returns true only in development environment
if (__DEV__) {
  const tron = Reactotron.configure({ host: '192.168.0.7' })
    .useReactNative()
    .connect();

  console.tron = tron;
  tron.clear();
}
