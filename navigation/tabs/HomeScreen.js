import * as React from 'react';
import { View, Text,FlatList,Dimensions,ScrollView } from 'react-native';
import {PLACES, TOP_PLACES} from '../../constant/data';
import TopPlacesCarousel from '../../components/TopPlacesCarausel';
import Card from '../../components/Card';
import houses from '../../constant/houses';

import ChatBot from '../../screens/ChatBot';

import TopHotelCard from '../../components/TopHotelCard';
import CardNumber from '../../screens/CareNumber';
import ServiceSection from '../../components/ServiceSection';

const transfer = [
    {
        id: 1,
        img: require('../../assets/images/newuser.png'),
        heading: 'Patients visited',
        price: '100+',
        isSending: true,
    },
    {
        id: 2,
        img: require('../../assets/images/doctor.png'),
        heading: 'Doctors',
        price: '200+',
        isSending: false,
    },{
        id: 3,
        img: require('../../assets/images/tcured.png'),

        heading: 'Tumor detected',
        price: '30+',
        isSending: false,
    },{
        id: 4,
        img: require('../../assets/images/hosp.png'),
        heading: 'Hospitals',
        price: '500+',
        isSending: false,
    }
];


const reviewData =[{name:"Somesh Kshirsagar",city:"Kalyan",rating:5,review:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sapien nec sagittis aliquam malesuada. Ligula ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sapien nec", recommended:"yes"},

{name:"Ssdhjbfshkdjr",city:"Kalyan",rating:4,review:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sapien nec sagittis aliquam malesuada. Ligula ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sapien nec", recommended:"No"},


{name:"Ssdhjbfshkdjr",city:"Kalyan",rating:2,review:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sapien nec sagittis aliquam malesuada. Ligula ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sapien nec", recommended:"No"},


{name:"Ssdhjbfshkdjr",city:"Kalyan",rating:1,review:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sapien nec sagittis aliquam malesuada. Ligula ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sapien nec", recommended:"yes"},


{name:"Vinayak Makskar",city:"Kalyan",rating:1,review:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sapien nec sagittis aliquam malesuada. Ligula ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sapien nec", recommended:"yes"}]


export default function HomeScreen({ navigation }) {
  const {width} = Dimensions.get('screen');
  const callSymptomsScreen = ()=>{
    navigation.navigate('SymptomsScreen');
  }
    return (
          <>
          <ChatBot/>
          <ScrollView >
          <Text style={{fontWeight:"bold",marginLeft:'5%',marginTop:'5%'}}>Top Rated Hospitals</Text>
          <FlatList
            data={houses}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              paddingLeft: 20,
              marginTop: 20,
              paddingBottom: 30,
            }}
            renderItem={({item}) => <TopHotelCard key={item} hotel={item} />}
          />
          <ServiceSection callSymptomsScreen = {callSymptomsScreen} />
          <Text style={{fontWeight:"bold",marginLeft:'5%',marginTop:'5%',marginBottom:'5%'}}> Brain Care by Numbers</Text>
          <CardNumber data={transfer} />

          <Text style={{fontWeight:"bold",marginLeft:'5%',marginTop:'5%'}}>User Reviews</Text>
          <FlatList
          snapToInterval={width - 20}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{paddingLeft: 20, paddingVertical: 20}}
          horizontal
          data={reviewData}
          renderItem={({item}) => <Card data={item} key={item} navigation= {navigation} />}
          key="ok"
          />
          

          

          
        
        
        
          </ScrollView>
       </>
    );
}
