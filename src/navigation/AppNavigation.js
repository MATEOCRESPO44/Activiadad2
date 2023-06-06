import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AccountsStack from "./AccountsStack";
import SearchsStack from "./SearchsStack";
import RestaurantsStack from "./RestaurantsStack";
import FavoritesStack from "./FavoritesStack";
import RankingsStack from "./RakingsStack";
import { Icon } from "@rneui/themed";
import {screen} from "../utils/screenName";




// Crear una instaia para la gestion de la navegacion 
 export const Tab=createBottomTabNavigator();

export const AppNavigation=()=>{
    return(
        <Tab.Navigator screenOptions={({route})=>({
            headerShown:false,
            tabBarActiveTintColor:"#0B710B",
            tabBarInsctiveTintColor:"#9C9F9C",
            tabBarIcon:( {color,size})=>screenOptions( route,color,size),
            })}>
            
            {/* <Tab.Screen 
             name={screen.favorites.tab}
             component={FavoritesStack} 
             options={{title:"Favoritos"}}
             /> */}
            {/* <Tab.Screen 
             name={screen.raking.tab}
             component={RankingsStack} 
             options={{title:"Raking"}}
             /> */}
            <Tab.Screen 
             name={screen.restaurants.tab}
             component={RestaurantsStack}
              options={{title:"INICIO" }}
              />
              <Tab.Screen
             name={screen.account.tab} 
             component={AccountsStack }
             options={{title:"Contador"}}
             />
        
            {/* <Tab.Screen 
             name={screen.serch.tab}
             component={SearchsStack}
            options={{title:"Buscar"}}
            /> */}
        </Tab.Navigator>
    )

};

const screenOptions=(route,color,size)=>{
    let iconName;
    if (route.name ==screen.restaurants.tab){
        iconName="home-account"

    }
    if(route.name== screen.favorites.tab){
        iconName="heart-outline"

    }
    if(route.name== screen.raking.tab){
        iconName="transfer-up"

    }
    if(route.name== screen.account.tab){
        iconName="database-arrow-up-outline"

    }
    if(route.name== screen.serch.tab){
        iconName="magnify-expand"

    }
    return (
        <Icon 
            type="material-community"
             name={iconName}
             color={color}
            size={size}/>
    );

}

