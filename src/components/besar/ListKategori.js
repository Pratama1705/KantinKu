import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { CardKategori } from '../kecil'

const ListKategori = ({kategori}) => {
  return (
    <View style={styles.container}>
      {kategori.map((kat) => {
        return (
          <CardKategori kat={kat} key={kat.id}/>
        )
      })}
    </View>
  )
}

export default ListKategori

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})