import {Text, StyleSheet, View, ScrollView} from 'react-native';
import React, {Component} from 'react';
import {
  BannerSlider,
  HeaderComponent,
  ListKategori,
  ListMenu,
  Jarak,
  Tombol,
} from '../components';
import {colors, fonts} from '../utils';
import { connect } from 'react-redux';
import { getListKategori } from '../actions/KategoriAction';
import { limitMenu } from '../actions/MenuAction';

class Home extends Component {

  componentDidMount() {
    this._unsubscribe = this.props.navigation.addListener('focus', () => {
      this.props.dispatch(getListKategori());
      this.props.dispatch(limitMenu());
    });
  }

  componentWillUnmount() {
    this._unsubscribe();
  }

  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.page}>
        <HeaderComponent navigation={navigation} page="Home"/>
        <ScrollView>
          <BannerSlider />
          <View style={styles.pilihKategori}>
            <Text style={styles.label}>Pilih Kategori</Text>
            <ListKategori navigation={navigation}/>
          </View>
          <View style={styles.pilihMenu}>
            <Text style={styles.label}>Menu Terbaru</Text>
            <ListMenu navigation={navigation} />

            <Tombol
              title="Lihat Semua"
              type="text"
              padding={7}
              onPress={() => navigation.navigate('Menu')}
            />
          </View>

          <Jarak height={80} />
        </ScrollView>
      </View>
    );
  }
}

export default connect()(Home)

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  pilihKategori: {
    marginHorizontal: 30,
    marginTop: 10,
  },
  pilihMenu: {
    marginHorizontal: 30,
    marginTop: 10,
  },
  label: {
    fontSize: 16,
    fontFamily: fonts.primary.regular,
    color: colors.black,
  },
});
