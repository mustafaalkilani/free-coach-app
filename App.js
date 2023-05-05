import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BmiCalculator from './components/BmiCalculator';
import MyTables from './components/MyTables';
import goToEquipmentExercises from './components/goToEquipmentExercises';
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="BmiCalculator" component={BmiCalculator} options={{ title: 'BMI حساب' }} />
        <Stack.Screen name="MyTables" component={MyTables} options={{ title: 'جداولي' }} />
        <Stack.Screen name="goToEquipmentExercises" component={goToEquipmentExercises} options={{ title: 'تمارين مع ادوات' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
