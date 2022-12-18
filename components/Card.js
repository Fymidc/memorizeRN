import { View, Text } from 'react-native'
import React from 'react'
import IonIcons from 'react-native-vector-icons/Ionicons'
import { useDispatch } from 'react-redux'
import { deleteCard, fetchAllCards } from '../reducers/CardReducer'


const Card = (props) => {

    const {id,definition,term,setid} = props
   const dispatch = useDispatch()
    const ondeleteCard=(id)=>{
        dispatch(deleteCard(id)).then(()=>{
            dispatch(fetchAllCards())
        }
        )
    }


    return (
        <View style={{borderRadius:10, elevation:8 ,backgroundColor:"#fff",padding:12,marginHorizontal:15,marginVertical:10}} >  
            <View style={{flexDirection:"row"  ,alignItems:"center",justifyContent:"space-between"}} >
                <Text style={{padding:5,fontSize:16,letterSpacing:1}} >{term}</Text>
                <IonIcons onPress={()=>ondeleteCard(id)} name='trash-outline' size={18} />                
            </View>

            <Text style={{padding:5,fontSize:16,letterSpacing:1}} >{definition}</Text>
        </View>
    )
}

export default Card