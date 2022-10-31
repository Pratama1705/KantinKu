import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  Image,
  ScrollView,
  Alert,
} from 'react-native';
import {colors, responsiveHeight, responsiveWidth} from '../utils';
import MyImage from '../assets/images/logo.png';
import { Tombol } from '../components';
import { loginUser } from '../actions/AuthActions';
import { connect } from 'react-redux';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  login = () => {
    const {email, password} = this.state;

    if (email && password) {
      //action
      this.props.dispatch(loginUser(email, password));
    } else {
      Alert.alert('Error', 'Email & Password harus diisi');
    }
  };

  componentDidUpdate(prevProps) {
    const {loginResult} = this.props;

    if (loginResult && prevProps.loginResult !== loginResult) {
      this.props.navigation.replace('MainApp');
    }
  }

  render() {
    const {email, password} = this.state;
    const {loginLoading} = this.props;
    return (
      <ScrollView style={stylesLogin.container}>
        <Image source={MyImage} style={stylesLogin.image} />
        <Text style={stylesLogin.text}>Kantinku</Text>
        <View style={stylesLogin.view}>
          <Text style={stylesLogin.text1}>Email :</Text>
          <TextInput style={stylesLogin.input} onChangeText={(email) => this.setState({email})}/>
          <Text style={stylesLogin.text2}>Password :</Text>
          <TextInput style={stylesLogin.input} onChangeText={(password) => this.setState({password})} secureTextEntry />
          <View style={stylesLogin.button}>
              <Tombol
                title="Continue"
                type="textIcon"
                icon="submit"
                padding={7}
                fontSize={18}
                onPress={() => this.login()}
                loading={loginLoading}
              />
            </View>
        </View>
        <View style={stylesLogin.view2}>
          <Text style={stylesLogin.text4}>Belum Punya Akun ?</Text>
          <Pressable
            onPress={() => 
              this.props.navigation.navigate('Register')
            }>
            <Text style={stylesLogin.text5}>Klik Untuk Daftar</Text>
          </Pressable>
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = (state) => ({
  loginLoading: state.AuthReducer.loginLoading,
  loginResult: state.AuthReducer.loginResult,
  loginError: state.AuthReducer.loginError,
});

export default connect(mapStateToProps, null)(Login);

const stylesLogin = StyleSheet.create({
  container: {
    backgroundColor: colors.white
  },
  image: {
    width: responsiveWidth(96),
    height: responsiveHeight(96),
    // marginLeft: 150,
    marginTop: 20,
    alignSelf: 'center'
  },
  text: {
    // marginLeft: responsiveWidth(129),
    fontSize: 36,
    fontWeight: 'bold',
    color: '#FFA500',
    marginTop: 0,
    alignSelf: 'center'
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
    marginTop: 27,
    marginLeft: 29,
    marginRight: 29,
    marginBottom: 43,
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
