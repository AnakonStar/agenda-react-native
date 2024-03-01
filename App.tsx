import { SafeAreaView } from 'react-native';

import global from '@/styles/global';
import { NavigationContainer } from '@react-navigation/native';

import Routes from '@/routes';

export default function App() {
  return (
    <SafeAreaView style={global.mainContainer}>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </SafeAreaView>
  );
}
