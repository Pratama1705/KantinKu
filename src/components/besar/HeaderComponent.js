import { StyleSheet, View, TextInput } from 'react-native';
import React, { Component } from 'react';
import { colors, fonts, responsiveHeight } from '../../utils';
import { IconCari } from '../../assets';
import { Jarak, Tombol } from '../kecil';

export default class HeaderComponent extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.wrapperHeader}>

          {/* input pencarian */}
          <View style={styles.searchSection}>
            <IconCari />
            <TextInput placeholder='Cari Jajanan...' style={styles.input} />
          </View>
          <Jarak width={10}/>
          <Tombol icon='keranjang' totalKeranjang={2} padding={10} />

        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    height: responsiveHeight(125)
  },
  wrapperHeader: {
    marginTop: 15,
    marginHorizontal: 30,
    flexDirection: 'row'
  },
  searchSection: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderRadius: 10,
    paddingLeft: 10,
    alignItems: 'center'
  },
  input: {
    fontSize: 16,
    fontFamily: fonts.primary.regular
  }
})
