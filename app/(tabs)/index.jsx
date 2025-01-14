import { View, Text ,StyleSheet} from 'react-native'
import React from 'react'

export default function task () {
  return (
    <View>
      <Text style={styles.text}>task</Text>
    </View>
  )
}


const styles = StyleSheet.create({
  text:{
      color:"white",
      fontSize:44,
      textAlign:"center"
  }
})
