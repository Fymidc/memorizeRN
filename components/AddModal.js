import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import RBSheet from "react-native-raw-bottom-sheet"

const AddModal = () => {
    
const refRBSheet = React.useRef();
//try to make it work and check the navigations
  return (
    <View>
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={true}
        animationType="slide"

        openDuration={500}
        closeDuration={200}
        customStyles={{
          wrapper: {
            backgroundColor: "rgba(0, 0, 0,0.1)"
          },
          draggableIcon: {
            backgroundColor: "#000"
          },
          container: {
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20
          }
        }}
      >
        <View style={styles.settingContainer} >
         <Text>ADD SETS</Text>
         <Text>ADD FOLDER</Text>

        </View>
      </RBSheet>
    </View>
  )
}

export default AddModal

const styles = StyleSheet.create({
    settingContainer: {
      flex: 1,
      paddingTop: 5
  
  
  },
  })