// import React from 'react'
// import { Text, View } from 'react-native'

// function AboutUsScreen() {
//   return (
//     <View>
      
//       <Text >Topic : Brain Tumor Detection</Text>
//       <Text>Group No. 26</Text>
      

//     </View>
//   )
// }

// export default AboutUsScreen

import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import Unorderedlist from 'react-native-unordered-list';
// You can import from local files

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function AboutUsScreen() {
  return (
   <View style={{padding:25,flex:1,marginTop:50}}>
  
  <View style={{marginBottom:10}}>
  <Text style={{fontWeight:"bold",color:"black",fontSize:25}}>Brain<Text style={{fontWeight:"bold",color:"blue",fontSize:25}}>Care</Text></Text>
  </View>

  <View>

  <Text style={{textAlign:'justify',fontSize:15,color:"grey"}}>A paragraph is a series of sentences that are organized and coherent, and are all related to a single topic. Almost every piece of writing you do that is longer than a few sentences should be organized into paragraphs. This is because paragraphs show a reader where the subdivisions of an essay begin and end, and thus help the reader see the organization of the essay and grasp its main points.{'\n'}{'\n'}Paragraphs can contain many different kinds of information. A paragraph could contain a series of brief examples or a single long illustration of a general point. It might describe a place, character, or process; narrate a series of events; compare or contrast two or more things; classify items into categories; or describe causes and effects. Regardless of the kind of information they contain, all paragraphs share certain characteristics. One of the most important of these is a topic sentence.</Text>

  </View>


  <View>
    <Text style={{marginTop:15,marginBottom:5,fontWeight:"bold",fontSize:18}}>List here</Text>

    <View style={{flexDirection:"row"}}>
    <View>
    <Unorderedlist color='blue' style={{fontSize:30}}>
    </Unorderedlist>
    </View>
    <View style={{alignItem:"center",justifyContent:"center",paddingRight:10,paddingTop:8}}><Text style={{textAlign:"justify",fontSize:15,color:"grey"}}>eader see the organization of the essay and grasp its main points.Paragraphs can contain many different kinds of information. A paragraph could contain a series of brief examples or a singl</Text></View>
    </View>



    <View style={{flexDirection:"row"}}>
    <View>
    <Unorderedlist color='blue' style={{fontSize:30}}>
    </Unorderedlist>
    </View>
    <View style={{alignItem:"center",justifyContent:"center",paddingRight:10,paddingTop:8}}><Text style={{textAlign:"justify",fontSize:15,color:"grey"}}>eader see the organization of the essay and grasp its main points.Paragraphs can contain many different kinds of information. A paragraph could contain a series of brief examples or a singl</Text></View>
    </View>

    <View style={{flexDirection:"row"}}>
    <View>
    <Unorderedlist color='blue' style={{fontSize:30}}>
    </Unorderedlist>
    </View>
    <View style={{alignItem:"center",justifyContent:"center",paddingRight:10,paddingTop:8}}><Text style={{textAlign:"justify",fontSize:15,color:"grey"}}>eader see the organization of the essay and grasp its main points.Paragraphs can contain many different kinds of information. A paragraph could contain a series of brief examples or a singl</Text></View>
    </View>



  </View>
   


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
});

