import { View, Text,StyleSheet,ScrollView ,SafeAreaView,Pressable} from 'react-native'
import {React,useState} from 'react'
import DatePicker from "react-native-modern-datepicker"
import {getFormatedDate} from "react-native-modern-datepicker"
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';

export default function calender  () {
  const today = new Date;
  const currentdate = getFormatedDate(today.setDate(today.getDate())+1,"YYYY/MM/DD");
  const[date ,handledatechange] = useState(currentdate);
  const todos = [
    {id:1,text:"wake early in the morning...."},
    {id:2,text:"eat breakfast early..."},
    {id:3,text:"eat breakfast early..."},
    {id:4,text:"eat breakfast early..."},
    {id:5,text:"eat breakfast early..."},
    {id:6,text:"eat breakfast early..."},
    {id:7,text:"eat breakfast early..."}
  ]

  function changedate(propdate){
    handledatechange(propdate);
  }

  const[show ,handleshow] = useState(currentdate);
  return (
    <SafeAreaView>
    <View style={styles.main}>
      
      <DatePicker
      style={styles.calender}
      mode ="calender"
      minimumDate={currentdate}
      selected = {date}
      onDateChange={changedate}
      ></DatePicker>

      <View style={styles.textmain}>
      <ScrollView  style={{height:350}}>
        <View style={styles.mainholder}>
            {
              todos.map((item)=>(
                <View  style = {styles.holder}key={item.id} >
                  <Text style = {styles.holdertext}>{item.text}</Text>  
                  <Pressable
                      onPress={() => console.log('fucked!')}
                      style={({ pressed }) => [
                        {
                          opacity: pressed ? 0.5 : 1,
                          
                        }
                      ]}
                    >
                      <Entypo name="squared-cross" size={24} color="black" />
                    </Pressable>
                
                </View>
              )
              )
            }
        </View>


        </ScrollView>
        </View>

        <Pressable
                onPress={() => console.log('Pressed!')}
                style={({ pressed }) => [
                  
                  styles.plus,
                  pressed && styles.plus1
              ]}
          >
           <AntDesign name="pluscircle" size={44} color="#009FBD" />
          </Pressable>         
        

    </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  main:{
    backgroundColor:"#E8F9FF",
    height:"100%"
  },  
  calender:{
    paddingTop:50,
    backgroundColor:"#D9EAFD"
  },
    text:{
        marginTop:20,
        color:"black",
        fontSize:44,
        textAlign:"center"
    },
    plus:{
      position:"absolute",
      top:650,
      left:280,
      opacity:1

    },
    plus1:{
  
      opacity:0.7
    },
    textmain:{
      padding:10,
    },
    holder:{
      width:"100%",
      backgroundColor:"#FBFBFB",
      padding:15,
      borderRadius:20,
      display:"flex",
      flexDirection:"row",
      justifyContent:"space-between"
    },
    mainholder:{
      display:"flex",
      gap:10
    },
    holdertext:{
      textAlign:"left",
      fontSize:15,
      
    }


})