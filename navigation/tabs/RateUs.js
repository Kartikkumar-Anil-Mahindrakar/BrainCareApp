
import * as React from 'react';
import { Text, View, StyleSheet,Image,TouchableOpacity,Button,TextInput,KeyboardAvoidingView } from 'react-native';
import Constants from 'expo-constants';
import RadioGroup from 'react-native-radio-buttons-group';


// You can import from local files

// or any pure javascript modules available in npm




    


export default function RateUs() {
  const [radioButtons, setRadioButtons] = React.useState([
        {
            id: '1', 
            label: 'Yes',
            value: 'Yes',
        },
        {
            id: '2',
            label: 'No',
            value: 'No'
        }
    ]);
    function onPressRadioButton(radioButtonsArray) {
        setRadioButtons(radioButtonsArray);
    }

  const [defaultstar,newstar] = React.useState(2);
  const [max,setmax] = React.useState([1,2,3,4,5]);

const Rating = () =>{

  return(
    

    <View style={{flexDirection:"row",width:300,justifyContent:"space-evenly",padding:10,marginLeft:"auto",marginRight:"auto"}}>

    
   
    {max.map((val)=>{
        if(val <= defaultstar)
        {
          return (
            <TouchableOpacity onPress={() => newstar(val)}>
            <Image source={require("../../assets/starfill.png")} style={{height:30,width:30}}/>
            </TouchableOpacity>)
        }
        else{
          return (
            <TouchableOpacity onPress={() => newstar(val)}>
            <Image source={require("../../assets/starempty.png")} style={{height:30,width:30}}/>
            </TouchableOpacity>

          )

        }

        
  
    }
)}




    </View>
    
  );


  
}


  return (
    <View style={{margin:"auto",flex:1,alignItems:"center",justifyContent:"center"}}>
    <KeyboardAvoidingView>
    <Text style={{fontWeight:"bold",marginBottom:25,marginLeft:"auto",marginRight:"auto",fontSize:22}}>How would u like to rate our App?</Text>
    <Rating />
    <Text style={{fontWeight:"bold",marginTop:3,fontSize:20,marginLeft:"auto",marginRight:"auto"}}>{defaultstar}/5</Text>


    <View style={{alignItems:"center",marginBottom:20,marginTop:50}}>
    <View>
    <Text style={{fontSize:18,fontWeight:"bold",color:"grey"}}>
    Would you recommend our services?
    </Text>
    </View>

      <RadioGroup 
    radioButtons={radioButtons} 
    onPress={onPressRadioButton} 
    layout='row'
    selectedButtonColor = 'red'
/>

    </View>

    <View style={{marginBottom:50}}>
    <TextInput
    multiline={true}
    numberOfLines={5}
    placeholder="Write your review about our App here"
    style={{ height:130,width:350,textAlignVertical: 'top',borderWidth:1,borderRadius:10,padding:15}}/>
    </View>


    

    
    <View style={{marginTop:20,width:200,marginRight:"auto",marginLeft:"auto",borderRadius:20,}}>

   
<TouchableOpacity onPress={()=>{}} style={{...styles.social_btn,backgroundColor:'#28388f',marginTop:20}} >
                    <Text style={{width:'80%',textAlign:'center',fontSize:18,fontWeight: 'bold',color:'#fff'}} >Submit</Text>
     </TouchableOpacity>


</View>
    </KeyboardAvoidingView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  social_btn:{
        height:55,
        width:'100%',
        borderWidth:1,
        borderRadius:10,
        borderColor:'#ddd',
        flexDirection:'row',
        alignItems:'center',
        marginBottom:20,
        justifyContent:"center"
    },
});
