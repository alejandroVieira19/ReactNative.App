import {createNativeStackNavigator} from '@react-navigation/native-stack'

import Welcome from '../Pages/Welcome/welcome';
import Login from '../Pages/SignUp/login';
import Main from '../Pages/Main/main';
import Register from '../Pages/Register/register';

const Stack = createNativeStackNavigator();

export default function Routes() {
    return (
        <Stack.Navigator>
            <Stack.Screen
            name = "Welcome"
            component={Welcome}
            options={{headerShown: false}}
            />

            <Stack.Screen
            name = "SignUp"
            component={Login}
            options={{headerShown: false}}
            />

            <Stack.Screen
            name = "Main"
            component={Main}
            options={{headerShown: false}}
            />

            <Stack.Screen
            name = "Register"
            component={Register}
            options={{headerShown: false}}
            />

        </Stack.Navigator>
    )
}