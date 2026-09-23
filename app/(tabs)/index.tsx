import Card from '@/components/Card'
import React from 'react'
import { StyleSheet, View } from 'react-native'

const index = () => {
  return (
    <View >
      <View style={styles.search}>

      </View>
      <Card />

      <Card />
      <Card />



    </View>
  )
}

export default index

const styles = StyleSheet.create({
  search: {
    width: 500,
    height: 40,
    borderWidth: 1,

    padding: 9,
    borderRadius: 20,
    borderColor: "red",
    marginTop: 30
  },
  box: {
    width: 500,
    height: 60,
    borderWidth: 1,
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: "flex-end",


  },
  img: {
    width: 50,
    height: 50,
    marginTop: 5,
    borderRadius: 20,
  }

})////