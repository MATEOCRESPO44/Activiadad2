import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {screen} from "../utils/screenName";
import SerchScreen from "../screems/SerchScreen";
const Stack = createNativeStackNavigator();

const SerchsStack=()=>{
    return(
        <Stack.Navigator>
            <Stack.Screen 
            name={screen.serch.serchs}
            component={SerchScreen}
            options={{title:"Serch"}}
            />
        </Stack.Navigator>
    )

}

export default SerchsStack;