import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { CardKategori } from '../kecil'
import { connect } from 'react-redux'
import { colors } from '../../utils';

const ListKategori = ({getListKategoriLoading, getListKategoriResult, getListKategoriError, navigation}) => {
  // console.log("Data Kategori :", getListKategoriResult)
  return (
    <View style={styles.container}>
      {getListKategoriResult ? (
        Object.keys(getListKategoriResult).map((key) => {
          return <CardKategori navigation={navigation} kategori={getListKategoriResult[key]} key={key} id={key}/>;
        })
      ) : getListKategoriLoading ? (
        <View style={styles.loading}>
            <ActivityIndicator color={colors.primary} />
        </View>
      ) : getListKategoriError ? (
        <Text>{getListKategoriError}</Text>
      ) :(
        <Text>Data Kosong</Text>
      )}
    </View>
  );
};

const mapStateToProps = (state) => ({
  getListKategoriLoading: state.KategoriReducer.getListKategoriLoading,
  getListKategoriResult: state.KategoriReducer.getListKategoriResult,
  getListKategoriError: state.KategoriReducer.getListKategoriError,
});

export default connect(mapStateToProps, null)(ListKategori);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  loading: {
    flex: 1,
    marginTop: 10,
    marginBottom: 30
  }
})