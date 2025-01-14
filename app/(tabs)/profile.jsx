import { View, Text ,StyleSheet,Image} from 'react-native'
import React from 'react'

import blankimage from "@/assets/images/blank.png" 

export default function profile() {
  return (
    <View style={styles.maincontainer}>

      {/* profile  */}
      <View style={styles.profilepicturecontainer}>
          <View style = {styles.pfpholder}>
          <Image source={blankimage} style={styles.image}></Image>
          </View>
          
          <Text style={styles.text}>Dominate your day</Text>
      </View>

      {/* task overview */}
      <Text style={styles.headingtext}>Task Overview</Text>

      <View style = {styles.taskcountmaincont}>
        <View style = {styles.first}>
          <Text style={{textAlign:"center",fontSize:25,fontWeight:"bold"}}>0</Text>
          <Text style={{textAlign:"center"}}>Completed task</Text>
         
        </View>
        <View style = {styles.first}>
          <Text style={{textAlign:"center",fontSize:25,fontWeight:"bold"}}>3</Text>
          <Text style={{textAlign:"center"}}>Pending task</Text>
        </View>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  maincontainer:{
    display:"flex",
    flexDirection:"column",
    padding:15,
    gap:20,
    backgroundColor:"#E8F9FF",
    height:"100%"
  },
  profilepicturecontainer:{
    marginTop:50,
    height:50,
    display:"flex",
    flexDirection:"row",
    justifyContent:"flex-start",
    alignItems:"center",
    gap:20,
    
    
  },
  pfpholder:{
    height:60,
    width:60,

  },
  image:{
    height:"100%",
    width:"100%",
    resizeMode:"contain",
    borderRadius:100,

  },
  text:{
      color:"rgba(0,0,0,1)",
      fontSize:24,
      fontWeight:"300"
      
  },
  headingtext:{
    color:"rgba(0,0,0,0.4)",
    fontSize:24,
    fontWeight:"bold"
    
  },
  taskcountmaincont:{
    display:"flex",
    flexDirection:"row",
    gap:10,
    
  },
  first:{
    display:"flex",
    width:"48%",
    backgroundColor:"white",
    height:100,
    justifyContent:"center",
    gap:17,
    borderRadius:10,
  }

})