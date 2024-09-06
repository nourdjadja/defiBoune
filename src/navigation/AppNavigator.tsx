import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../pages/HomeScreen';
import ExploreBooksScreen from '../pages/ExploreBooksScreen';

const Stack = createStackNavigator();

const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="ExploreBooks" component={ExploreBooksScreen} />
    </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
