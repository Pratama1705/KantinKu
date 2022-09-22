import { View } from 'react-native'
import React from 'react'
import { CardMenuProfile } from '../kecil'

const ListMenuProfile = ({menus}) => {
  return (
    <View>
      {menus.map((menu) => {
        return <CardMenuProfile menu= {menu} key={menu.id} />
      })}
    </View>
  )
}

export default ListMenuProfile