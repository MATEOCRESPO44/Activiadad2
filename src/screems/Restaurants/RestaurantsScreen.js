import React from "react";
import { View,Text } from "react-native";
import { Button, Tooltip } from "@rneui/base";
import {screen} from "../../utils/screenName"
const ResturantsScreen=(props)=>{
    const {navigation} = props

    const goToAddRestaurant=()=>{
        //console.log("Ir a creacion de Restaurante");
        //navigation.navigate(screen.restaurants.addRestaurant);
        navigation.navigate(screen.account.tab,{screen:screen.account.accounts});
    };
    return(
        
        <View>
            
            <Text style={{
                textAlign: 'center',
                fontSize: 60,
                position: 'relative'
                
            }} >Bienvenido</Text>
            
              <Button  title="Ingreso al contador" onPress={goToAddRestaurant}/>
            
        </View>

    );
};

export default ResturantsScreen;