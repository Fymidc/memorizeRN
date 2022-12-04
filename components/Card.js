import { View, Text } from 'react-native'
import React from 'react'
import IonIcons from 'react-native-vector-icons/Ionicons'


const Card = () => {

    const ondeleteCard=()=>{
        console.log("delete")
    }

    return (
        <View style={{borderRadius:10, elevation:8 ,backgroundColor:"#fff",padding:12,marginHorizontal:15,marginVertical:10}} >  
            <View style={{flexDirection:"row"  ,alignItems:"center",justifyContent:"space-between"}} >
                <Text style={{padding:5,fontSize:16,letterSpacing:1}} >Memorize</Text>
                <IonIcons onPress={()=>ondeleteCard()} name='trash-outline' size={18} />                
            </View>

            <Text style={{padding:5,fontSize:16,letterSpacing:1}} >Ezberlemek</Text>
        </View>
    )
}

export default Card