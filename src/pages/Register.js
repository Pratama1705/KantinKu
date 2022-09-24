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
import MyImage from '../assets/images/register_pic.png';

export default class Register extends Component {
  render() {
    return (
      <View>
        <ScrollView>
          <View style={stylesLogin.viewPicExplain}>
            <Image source={MyImage} style={stylesLogin.image} />
            <Text style={stylesLogin.text}>Isi Data Diri Anda</Text>
          </View>
          <View style={stylesLogin.viewFieldBox}>
            <View style={stylesLogin.viewInputOne}>
              <Text style={stylesLogin.textInput}>Nama :</Text>
              <TextInput style={stylesLogin.input} />
            </View>
            <View style={stylesLogin.viewInput}>
              <Text style={stylesLogin.textInput}>Email :</Text>
              <TextInput style={stylesLogin.input} />
            </View>
            <View style={stylesLogin.viewInput}>
              <Text style={stylesLogin.textInput}>No Handphone :</Text>
              <TextInput style={stylesLogin.input} />
            </View>
            <View style={stylesLogin.viewInput}>
              <Text style={stylesLogin.textInput}>Password :</Text>
              <TextInput style={stylesLogin.input} />
            </View>
            <Pressable
              style={stylesLogin.button}
              onPress={() => {
                this.props.navigation.navigate('Login');
              }}>
              <Text style={stylesLogin.buttonText}>Continue</Text>
            </Pressable>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const stylesLogin = StyleSheet.create({
  viewControlPage: {
    marginBottom: responsiveWidth(20),
  },
  viewPicExplain: {
    marginLeft: responsiveWidth(75),
    marginTop: responsiveWidth(50),
  },
  viewFieldBox: {
    marginLeft: responsiveWidth(30),
    marginRight: responsiveWidth(30),
    marginTop: responsiveWidth(10),
    marginBottom: responsiveWidth(30),
    borderWidth: 0,
    borderRadius: 20,
    shadowColor: 'black',
    shadowOpacity: 1.0,
    shadowOffset: {width: 0, height: 3},
    shadowRadius: 10,
    elevation: 3,
    backgroundColor: 'white',
  },
  image: {
    width: responsiveWidth(230),
    height: responsiveHeight(160),
  },
  text: {
    marginLeft: responsiveWidth(45),
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: responsiveWidth(20),
  },
  textInput: {
    marginLeft: 29,
    marginBottom: 6,
  },
  input: {
    borderWidth: 1,
    marginLeft: 29,
    marginRight: 29,
    borderRadius: 5,
  },
  viewInput: {
    marginTop: responsiveWidth(10),
  },
  viewInputOne: {
    marginTop: responsiveWidth(20),
  },
  button: {
    backgroundColor: '#FFA500',
    marginTop: 27,
    marginLeft: 29,
    marginRight: 29,
    marginBottom: 20,
    borderRadius: 5,
    borderWidth: 0,
    height: 46,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: responsiveWidth(105),
    marginTop: responsiveWidth(10),
  },
});
