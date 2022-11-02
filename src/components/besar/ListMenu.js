import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { CardMenu } from '../kecil'
import { connect } from 'react-redux'
import { colors } from '../../utils'

const ListMenu = ({ getListMenuLoading, getListMenuResult, getListMenuError, navigation }) => {
  return (
    <View style={styles.container}>
      {getListMenuResult ? (
        Object.keys(getListMenuResult).map((key) => {
          return <CardMenu menu={getListMenuResult[key]} key={key} navigation={navigation} />;
        })
      ) : getListMenuLoading ? (
        <View style={styles.loading}>
            <ActivityIndicator color={colors.primary} />
        </View>
      ) : getListMenuError ? (
        <Text>{getListMenuError}</Text>
      ) :(
        <Text>Data Kosong</Text>
      )}
    </View>
  )
}

const mapStateToProps = (state) => ({
  getListMenuLoading: state.MenuReducer.getListMenuLoading,
  getListMenuResult: state.MenuReducer.getListMenuResult,
  getListMenuError: state.MenuReducer.getListMenuError,
});

export default connect(mapStateToProps, null)(ListMenu)

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 10
  },
  loading: {
    flex: 1,
    marginTop: 10,
    marginBottom: 30
  }
})