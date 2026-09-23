import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const Card = () => {
  return (
    <TouchableOpacity onPress={()=>{alert("Hi")}}>
    <View style={styles.box}>
           <Text>محمد</Text>
           <Text>15:50</Text>
           <Text></Text>
           <Image style={styles.img} source={{ uri: "https://media.istockphoto.com/id/94324390/id/foto/potret-singa-jantan-besar.jpg?s=170667a&w=0&k=20&c=aqjp865Ztd1UHZxBJBQHy_Hqe-6_kfNJ_R1-Giy3Q-M=" }} />
         </View>
   </TouchableOpacity>
  )
}

export default Card

const styles = StyleSheet.create({
     box: {
    width: 500,
    height: 60,
    borderWidth: 1,
    flexDirection:'row',
    alignContent:'center',
    justifyContent:"flex-end",
    

  },
  img: {
    width: 50,
    height:50,
    marginTop:5,
    borderRadius:20,
  }
})