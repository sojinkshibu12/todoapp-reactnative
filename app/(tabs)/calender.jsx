import { View, Text,StyleSheet,ScrollView ,SafeAreaView,Pressable,TextInput,Button,Modal,TouchableOpacity,} from 'react-native'
import {React,useState} from 'react'
import DatePicker from "react-native-modern-datepicker"
import {getFormatedDate} from "react-native-modern-datepicker"
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import axios from "axios";

export default function calender  () {
  const today = new Date;
  const currentdate = getFormatedDate(today.setDate(today.getDate())+1,"YYYY/MM/DD");
  const[date ,handledatechange] = useState(currentdate);
  const [modalVisible, setModalVisible] = useState(false);
  const [text, settext] = useState("");
  const [todos,settodos] = useState([]);



  const handleSubmit = () => {
    console.log("Submitted Value:", text);
    setModalVisible(false); // Close the modal after submission

    axios.post("http://192.168.0.106:5000/calender" , {date,text})
    .then(res=>{
      console.log(res);
    })
    .catch(err=>{
      console.log(err);
    })
    settext(""); // Clear the input field
  };



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
                onPress={()=>setModalVisible(true)}
                style={({ pressed }) => [
                  
                  styles.plus,
                  pressed && styles.plus1
              ]}
          >
           <AntDesign name="pluscircle" size={44} color="#009FBD" />
          </Pressable>         
        
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>Enter your input</Text>
            <TextInput
              style={styles.input}
              placeholder="Type here..."
              value={text}
              onChangeText={(text) => settext(text)}
            />
            <View style={styles.buttonContainer}>
              <Button title="Submit" onPress={handleSubmit} />
              <Button
                title="Cancel"
                color="red"
                onPress={() => setModalVisible(false)}
              />
            </View>
          </View>
        </View>
      </Modal>

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
      
    },
    modalContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    modalView: {
      width: "80%",
      backgroundColor: "#E8F9FF",
      borderRadius: 20,
      padding: 20,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    modalTitle: {
      fontSize: 18,
      fontWeight: "bold",
      marginBottom: 15,
    },
    input: {
      height: 40,
      width: "100%",
      borderColor: "gray",
      borderWidth: 1,
      borderRadius: 10,
      paddingHorizontal: 10,
      marginBottom: 20,
    },
    buttonContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      width: "100%",
    },


})