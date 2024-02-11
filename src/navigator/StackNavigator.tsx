import { createStackNavigator } from '@react-navigation/stack';
import { Screem1 } from '../screems/Screem1';
import { Screem2 } from '../screems/Screem2';


const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Screem1" options={{title:'Home'}} component={Screem1} />
      <Stack.Screen name="Screem2" options={{title:'Division'}} component={Screem2} />
    </Stack.Navigator>
  );
}