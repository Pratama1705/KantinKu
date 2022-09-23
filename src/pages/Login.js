import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  Image,
} from 'react-native';
import MyImage from '../assets/images/logo.png';

export default class Login extends Component {
  render() {
    return (
      <View>
        <Image source={MyImage} style={stylesLogin.image} />
        <Text style={stylesLogin.text}>KantinKu</Text>
        <View style={stylesLogin.view}>
          <Text style={stylesLogin.text1}>Email :</Text>
          <TextInput style={stylesLogin.input1} />
          <Text style={stylesLogin.text2}>Password :</Text>
          <TextInput style={stylesLogin.input2} />
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
          <Pressable>
            <Text style={stylesLogin.text5}>Klik Untuk Daftar</Text>
          </Pressable>
        </View>
      </View>
    );
  }
}

const stylesLogin = StyleSheet.create({
  image: {
    width: 96,
    height: 96,
    marginLeft: 150,
    marginTop: 20,
  },
  text: {
    marginLeft: 129,
    fontSize: 36,
    fontWeight: 'bold',
    color: '#FFA500',
    marginTop: 0,
  },
  view: {
    marginLeft: 30,
    marginRight: 30,
    marginTop: 20,
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
  input1: {
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
  input2: {
    borderWidth: 1,
    marginLeft: 29,
    marginRight: 29,
    borderRadius: 5,
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
    marginLeft: 118,
    marginTop: 10,
  },
  view2: {
    marginLeft: 125,
    marginTop: 30,
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
    marginLeft: 20,
  },
});
