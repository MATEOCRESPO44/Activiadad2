import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {screen} from "../utils/screenName";
import ResturantsScreen from "../screems/Restaurants/RestaurantsScreen";
import AddRestaurantsScreen from "../screems/Restaurants/AddRestaurantsScreen"
//instancia de componente
const Stack=createNativeStackNavigator();

const RestaurantsStack=()=>{
    return(
        <Stack.Navigator>
            <Stack.Screen 
             name={screen. restaurants.restaurants}
             component={ResturantsScreen} 
             options={{title: "Inicio"}}
             />
             <Stack.Screen
              name={screen.restaurants.addRestaurant} 
             component={AddRestaurantsScreen}
             options={{title:"Contador"}}
             />
        </Stack.Navigator>
    )

}
export default RestaurantsStack;