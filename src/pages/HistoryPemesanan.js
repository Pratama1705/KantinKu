import { StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import {dummyPesanan} from '../data'
import { colors } from '../utils'
import { ListHistory } from '../components'

export default class HistoryPemesanan extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       pesanans: dummyPesanan
    }
  }
  
  render() {
    const { pesanans } = this.state
    return (
      <View style={styles.pages}>
        <ListHistory pesanans={pesanans}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  pages: {
    flex: 1,
    backgroundColor: colors.white
  }
})