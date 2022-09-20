import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { IconKeranjang } from '../../assets'
import { colors } from '../../utils'

const Tombol = ({icon, totalKeranjang, padding}) => {

  const Icon = () => {
    if(icon === 'keranjang') {
      return <IconKeranjang/>
    }
    return <IconKeranjang/>
  }
  return (
    <TouchableOpacity style={styles.container(padding)}>
      <Icon/>

      {totalKeranjang && (
        <View style={styles.notif}>
          <Text style={styles.textNotif}>
            {totalKeranjang}
          </Text>
        </View>
      )}
    </TouchableOpacity>
  )
}

export default Tombol

const styles = StyleSheet.create({
  container: (padding) => ({
    backgroundColor: colors.white,
    padding: padding,
    borderRadius: 10
  }),
  notif: {
    position: 'absolute',
    top: 5,
    right: 5,
    backgroundColor: 'red',
    borderRadius: 3,
    padding: 3
  },
  textNotif: {
    fontSize: 10,
    color: colors.white
  }
})