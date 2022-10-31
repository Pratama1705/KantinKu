import { ActivityIndicator, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { CardKeranjang } from '../kecil'
import { connect } from 'react-redux'
import { colors } from '../../utils'

const ListKeranjang = ({ getListKeranjangLoading, getListKeranjangResult, getListKeranjangError }) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>

        {getListKeranjangResult ? (
          Object.keys(getListKeranjangResult.pesanan).map((key) => {
            return <CardKeranjang keranjang={getListKeranjangResult.pesanan[key]} keranjangUtama={getListKeranjangResult} key={key} id={key} />
          })
        ) : getListKeranjangLoading ? (
          <View style={styles.loading}>
            <ActivityIndicator color={colors.primary} />
          </View>
        ) : getListKeranjangError ? (
          <Text>{getListKeranjangError}</Text>
        ) : (
          <Text>Data Kosong</Text>
        )}
        {/* {keranjangs.map((keranjang => {
            return <CardKeranjang keranjang={keranjang} key={keranjang.id}/>
        }))} */}
      </View>
    </ScrollView>
  )
}

export default connect()(ListKeranjang)

const styles = StyleSheet.create({
  container: {
    marginVertical: 10
  },
  loading: {
    flex: 1,
    marginTop: 10,
    marginBottom: 30
  }
})