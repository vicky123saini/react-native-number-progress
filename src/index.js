import React from 'react';
import { Text, View, Image } from 'react-native';

export default function ProgressBar(props){
  const{size, progress}=props;
  return(
    <View style={{flexDirection:"row", alignItems:"center", justifyContent:"center"}}>
                {
                    Array.from({ length: size }).map((_, index)=>(
                    <View style={{flexDirection:"row", alignItems:"center"}}>
                        {
                            index==0 && <></> ||
                            progress == (index+1) && <View style={[{backgroundColor:"#027EA7", width:20, height:5}, size>7 && {width:5}]}/> ||
                            progress > (index+1) && <View style={[{backgroundColor:"#A3CA3E", width:20, height:5}, size>7 && {width:5}]}/> ||
                            <View style={[{backgroundColor:"#D8D8DE", width:20, height:5}, size>7 && {width:5}]}/> 
                        }
                        {
                            progress == (index+1) && 
                            <View style={[{backgroundColor:"#027EA7", borderRadius:20, padding:10}, size>7 && {borderRadius:10, padding:5}]}>
                                <Text style={[{width:20, height:20, fontWeight:"bold", color:"#fff", textAlign:"center"}, size>7 && {width:10, height:10, fontSize:10}]}>{index+1}</Text>
                            </View> ||
                            progress > (index+1) &&
                            <View style={[{backgroundColor:"#A3CA3E", borderRadius:20, padding:10}, size>7 && {borderRadius:10, padding:5}]}>
                                <Image style={[{width:20, height:20}, size>7 && {width:10, height:10}]} resizeMode="stretch" source={require("./assets/images/ic_tick_xhdpi.png")}/>
                            </View>
                            ||
                            <View style={[{backgroundColor:"#D8D8DE", borderRadius:20, padding:10}, size>7 && {borderRadius:10, padding:5}]}>
                                <Text style={[{width:20, height:20, fontWeight:"bold", color:"#000", textAlign:"center"}, size>7 && {width:10, height:10, fontSize:10}]}>{index+1}</Text>
                            </View>
                        }
                        
                    </View>
                    ))
                }
            </View>
  )
}

ProgressBar.defaultProps = {
  size:5,
  progress:1
}