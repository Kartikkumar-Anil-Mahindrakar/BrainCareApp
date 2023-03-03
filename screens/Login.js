import React,{useState} from 'react';
import { StyleSheet, Text, ScrollView,View,StatusBar,Image,TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';






const Login = ({navigation}) => {

    const [formData,setformData] = useState({
        email:'',
        password:''
    })

    return (
        <ScrollView style={{flex:1,backgroundColor:'#fff',flexDirection:'column'}}>
            <StatusBar barStyle="dark-content" backgroundColor="#fff" />
            {/* login form section */}
            <View style={{flex:2,flexDirection:'column',backgroundColor:'#fff',paddingTop:10,  paddingHorizontal:'3%'}} >         
            <View style={{flexDirection: 'row', marginTop: 40}}>
              <Text style={{fontWeight: 'bold', fontSize: 22, color: '#000'}}>
                Brain
              </Text>
              <Text style={{fontWeight: 'bold', fontSize: 22, color: '#64beff'}}>
                Care
              </Text>
            </View>


                <View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}} >
                    <Text style={{fontWeight:'bold',fontSize:27,color:'000'}} >Welcome Back</Text>
                    
                </View>
               
                
                <View style={{flexDirection:'column',paddingTop:20}} >
                <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',backgroundColor:'#ededed',width:'95%',borderRadius:10,height:60,paddingLeft:20}} >
                        <Icon name="envelope-o" size={22} color="#818181"/>
                        <TextInput
                         onChangeText={(text)=>{setformData((prevState)=>({...prevState,email:text}))}}                       style={[styles.input,{placeholderTextColor: '#a5a5a5'},{fontWeight:'bold'}]} 
                        placeholder="Enter Email" 
                        placeholderTextColor="#818181" />

                    </View>
                <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',backgroundColor:'#ededed',width:'95%',borderRadius:10,height:60,paddingLeft:20,marginTop:20}} >
                        <Icon name="lock" size={22} color="#818181" />
                        <TextInput onChangeText={(text)=>{setformData((prevState)=>({...prevState,password:text}))}} style={[styles.input,{fontWeight:'bold'}]} placeholder="Enter Password" secureTextEntry={true} placeholderTextColor="#818181" />
                    </View>

                    {/*Forgot Password button*/}
                    <TouchableOpacity onPress={()=>navigation.navigate('ForgotPassword')} style={{width:'95%',marginBottom:10}}>
                    <Text style={{fontSize:13,fontWeight:'bold',
                    color:'red',alignSelf:"flex-end",paddingTop:10}} >Forgot Password</Text>
                    </TouchableOpacity>

                   
                </View>

            </View>

            {/* SignIn ans SignUp */}
            
            <View style={{flex:1,backgroundColor:'#fff',flexDirection:'column',paddingHorizontal:'3%'}} >

                    

                    <TouchableOpacity onPress={()=>navigation.replace('EntryScreen')} style={{...styles.social_btn,backgroundColor:'#28388f'}} >
                    <Text style={{width:'80%',textAlign:'center',fontSize:18,fontWeight: 'bold',color:'#fff'}} >Sign In</Text>
                    </TouchableOpacity>


                     <TouchableOpacity onPress={()=>navigation.navigate('SignUp')} style={styles.social_btn} >
                    <Text style={{width:'80%',textAlign:'center',fontSize:18,fontWeight:'bold',color:'#333'}} >Sign Up</Text>
                    </TouchableOpacity>
            
            </View>
            
        </ScrollView>
    )
}

export default Login

const styles = StyleSheet.create({
    input:{
        position:'relative',
        height:'100%',
        width:'90%',
        fontWeight:'medium',
        paddingLeft:20,
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
    social_img:{
        width:25,
        height:25,
        marginLeft:15
    },
    
});

    
                    