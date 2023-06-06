import React, { useState } from "react";
import { View,Text } from "react-native";
import { Button, color } from "@rneui/base";
import { Colors } from "react-native/Libraries/NewAppScreen";


// const [contar,setContar ] = userState(0);

// const acccionCoche = ()=>{
//     setcontar(contar+1);
// }


const AccountScreen=()=>{

    const [contador,setContar]= useState (0);


    return(
    <View style={{flex: 1 , backgroundColor: 'SKY' }}>
            <Text style={{
                textAlign: 'center',
                fontSize: 60,
                position: 'relative'
            }} 
            
            >Contador : {contador} </Text>

            <Button  title="Sumar" onPress={ ()=>setContar(contador+1)} />
            <Button  title="Restar" onPress={ ()=>setContar(contador-1)}/>

           {/* //<Text {contar}>Total </Text> */}
        </View>
    );
};

export default AccountScreen;