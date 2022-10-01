import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  Image,
  ScrollView,
} from 'react-native';
import {responsiveHeight, responsiveWidth} from '../utils';
import MyImage from '../assets/images/logo.png';

export default class Login extends Component {
  render() {
    return (
      <ScrollView>
        <Image source={MyImage} style={stylesLogin.image} />
        <Text style={stylesLogin.text}>Kantinku</Text>
        <View style={stylesLogin.view}>
          <Text style={stylesLogin.text1}>Email :</Text>
          <TextInput style={stylesLogin.input} />
          <Text style={stylesLogin.text2}>Password :</Text>
          <TextInput style={stylesLogin.input} />
          <Pressable
            style={stylesLogin.button}
            onPress={() => {
              this.props.navigation.navigate('MainApp');
            }}>
            <Text style={stylesLogin.text3}>Login</Text>
          </Pressable>
        </View>
        <View style={stylesLogin.view2}>
          <Text style={stylesLogin.text4}>Belum Punya Akun ?</Text>
          <Pressable
            onPress={() => {
              this.props.navigation.navigate('Register');
            }}>
            <Text style={stylesLogin.text5}>Klik Untuk Daftar</Text>
          </Pressable>
        </View>
      </ScrollView>
    );
  }
}

const stylesLogin = StyleSheet.create({
  image: {
    width: responsiveWidth(96),
    height: responsiveHeight(96),
    // marginLeft: 150,
    alignSelf: 'center',
    marginTop: 20,
  },
  text: {
    // marginLeft: responsiveWidth(129),
    alignSelf: 'center',
    fontSize: 36,
    fontWeight: 'bold',
    color: '#FFA500',
    marginTop: 0,
  },
  view: {
    marginLeft: responsiveWidth(30),
    marginRight: responsiveWidth(30),
    marginTop: responsiveWidth(20),
    borderWidth: 0,
    borderRadius: 20,
    shadowColor: 'black',
    shadowOpacity: 1.0,
    shadowOffset: {width: 0, height: 3},
    shadowRadius: 10,
    elevation: 3,
    backgroundColor: 'white',
  },
  text1: {
    marginLeft: 29,
    marginBottom: 6,
    marginTop: 43,
  },
  input: {
    borderWidth: 1,
    marginLeft: 29,
    marginRight: 29,
    borderRadius: 5,
  },
  text2: {
    marginLeft: 29,
    marginBottom: 6,
    marginTop: 28,
  },
  button: {
    backgroundColor: '#FFA500',
    marginTop: 27,
    marginLeft: 29,
    marginRight: 29,
    marginBottom: 43,
    borderRadius: 5,
    borderWidth: 0,
    height: 46,
  },
  text3: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: responsiveWidth(118),
    marginTop: responsiveWidth(10),
  },
  view2: {
    marginLeft: responsiveWidth(125),
    marginTop: responsiveWidth(30),
  },
  text4: {
    color: 'black',
    opacity: 0.5,
    marginLeft: 2,
    fontSize: 17,
  },
  text5: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 15,
    marginLeft: responsiveWidth(20),
  },
});
