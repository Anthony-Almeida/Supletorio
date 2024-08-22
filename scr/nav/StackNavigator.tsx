import { createStackNavigator } from '@react-navigation/stack';
import { Screen1 } from '../screens/Screen1';
import { Screen2 } from '../screens/Screen2';
import Screen3 from '../screens/Screen3';


const Stack = createStackNavigator();

export const StackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Screen1" options={{headerShown:false}} component={Screen1} />
            <Stack.Screen name="Screen2" options={{headerShown:false}} component={Screen2} />
            <Stack.Screen name="Screen3" options={{headerShown:false}} component={Screen3} />
        </Stack.Navigator>
    );
}