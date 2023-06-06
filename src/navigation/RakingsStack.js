import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {screen} from "../utils/screenName";
import RakingScreen from "../screems/RakingScreen";
const Stack = createNativeStackNavigator();

const RankingsStack=()=>{
    return(
        <Stack.Navigator>
            <Stack.Screen 
            name={screen.raking.rakings}
            component={RakingScreen}
            options={{title:"Raking"}}
            />
        </Stack.Navigator>
    )

}

export default RankingsStack;