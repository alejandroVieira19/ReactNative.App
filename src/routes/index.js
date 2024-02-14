import {createNativeStackNavigator} from '@react-navigation/native-stack'

import Welcome from '../Pages/Welcome/welcome';
import Login from '../Pages/SignUp/login';

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

        </Stack.Navigator>
    )
}