import { StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import { colors, getData } from '../utils'
import { ListHistory } from '../components'
import { connect } from 'react-redux'
import { getListHistory } from '../actions/HistoryActions'

class HistoryPemesanan extends Component {

  componentDidMount() {
    getData('user').then((res) => {
      const data = res;

      if (!data) {
        this.props.navigation.replace('Login');
      } else {
        this.props.dispatch(getListHistory(data.uid));
      }
    });
  }
  
  render() {
    return (
      <View style={styles.pages}>
        <ListHistory navigation={this.props.navigation}/>
      </View>
    )
  }
}

export default connect()(HistoryPemesanan)

const styles = StyleSheet.create({
  pages: {
    flex: 1,
    backgroundColor: colors.white
  }
})