import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { StackSwitcher } from './src/navigation/StackSwitcher';
import { store } from './src/redux/store';

export default function App() {
return (
  <Provider store={store}>
    <StackSwitcher />
  </Provider>
);
};

