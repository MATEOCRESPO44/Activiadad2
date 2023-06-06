import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {screen} from "../utils/screenName";
import AccountScreen from "../screems/AccountStreen";
const Stack = createNativeStackNavigator();

const AccountsStack=()=>{
    return(
        <Stack.Navigator>
            <Stack.Screen 
            name={screen.account.accounts}
            component={AccountScreen}
            options={{title:"Contador"}}
            />
        </Stack.Navigator>
    )

}

export default AccountsStack;