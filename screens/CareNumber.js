import { StyleSheet, Text, View,Image } from 'react-native'
import React, {useEffect} from 'react'
// import TransferItem from './transferItem'
// import Spacer from '../../../components/spacer'
import { Ionicons } from '@expo/vector-icons';


const Spacer = ({width = 0, height = 0}) => {
  return (
    <View style={{width: width, height: height}}></View>
  )
}



const TransferItem = (props) => {
  return (
    <View style={[styles.container,
         { 
             borderBottomLeftRadius: props.data.isSending ?  15: 15,
             borderBottomRightRadius: props.data.isSending ? 15 : 15,
             borderTopLeftRadius: props.data.isSending ? 15 : 15,
             borderTopRightRadius: props.data.isSending ? 15 : 15,
             
             }]}>


      
      <View style={styles.row}>
          <View>
          <Text style={styles.price}>{props.data.price}</Text>
        
            <Text style={styles.desc}>{props.data.heading}</Text>
              
            
          </View>
          <Image source={props.data.img} style={styles.img} />
      </View>
    </View>
  )
}

const CareNumber = (props) => {
  return ( 
    <>
    <View style={{flexDirection:"row",alignItems: "center",justifyContent: "center"}}>
      <TransferItem data = {props.data[0] } />
      <Spacer height={15} />
      
      <TransferItem data = { props.data[1] } />
      
    </View>
    <View style={{flexDirection:"row",alignItems: "center",justifyContent: "center"}}>
      <TransferItem data = {props.data[2] } />
      <Spacer height={15} />
      
      <TransferItem data = { props.data[3] } />
      
    </View>
    </>
  )
}

export default CareNumber

const styles = StyleSheet.create({
    icon: {
        width: 20,
        height: 20,
        backgroundColor: 'orange',
        position: 'absolute',
        top: 74,
        zIndex: 100,
        right: '50%',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
      
        
        height: 80,
        width: 150,
        backgroundColor: 'white',
        padding: 15,
        margin:3
    },
    desc: {
        fontSize: 12,
        color: 'grey',
    
    },
    price: {
      marginTop:8,
        fontSize: 12,
        fontWeight: 'bold',
        
    },
    img: {
      marginLeft: 15,
      marginRight: 2,
        width: 30,
        height: 30,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    }
})