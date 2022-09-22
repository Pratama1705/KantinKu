import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { CardMenu } from '../kecil'

const ListMenu = ({ menus, navigation }) => {
  return (
    <View style={styles.container}>
      {menus.map((menu) => {
        return (
          <CardMenu key={menu.id} menu={menu} navigation={navigation}/>
        )
      })}
    </View>
  )
}

export default ListMenu

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 10
  }
})