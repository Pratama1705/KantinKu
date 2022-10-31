import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { IconBack, IconKeranjang, IconSubmit } from '../../../assets'
import { colors } from '../../../utils'
import TextOnly from './TextOnly'
import TextIcon from './TextIcon'
import TombolLoading from './TombolLoading'

const Tombol = (props) => {

  const Icon = () => {
    if(icon === 'keranjang') {
      return <IconKeranjang/>
    }else if(icon === 'arrow-left') {
      return <IconBack/>
    } else if (icon === 'submit') {
      return <IconSubmit />
    }
    return <IconKeranjang/>
  }

  const {icon, totalKeranjang, padding, type, onPress, loading} = props;

  if(loading) {
    return <TombolLoading {...props}/>
  }

  if(type === "text") {
    return <TextOnly {...props}/>
  }else if(type === "textIcon"){
    return <TextIcon {...props}/>
  }

  return (
    <TouchableOpacity style={styles.container(padding)} onPress={onPress}>
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