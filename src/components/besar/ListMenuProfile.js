import { View } from 'react-native'
import React from 'react'
import { CardMenu } from '../kecil'

const ListMenuProfile = ({menus}) => {
  return (
    <View>
      {menus.map((menu) => {
        return <CardMenu menu= {menu} key={menu.id} />
      })}
    </View>
  )
}

export default ListMenuProfile