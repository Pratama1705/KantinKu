import React, { Component } from 'react';
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
import { colors, responsiveHeight, responsiveWidth } from '../utils';
import { Jarak, Tombol } from '../components'
import MyImage from '../assets/images/register_pic.png';
import { registerUser } from '../actions/AuthActions';
import { connect } from 'react-redux';

class Register extends Component {

  constructor(props) {
    super(props);

    this.state = {
      nama: '',
      email: '',
      nohp: '',
      password: '',
    };
  }

  componentDidUpdate(prevProps) {
    const { registerResult } = this.props

    if (registerResult && prevProps.registerResult !== registerResult) {
      this.props.navigation.replace("MainApp")
    }
  }

  onContinue = () => {
    const { nama, email, nohp, password } = this.state;

    if (nama && email && nohp && password) {
      const data = {
        nama: nama,
        email: email,
        nohp: nohp,
        status: 'user'
      }

      this.props.dispatch(registerUser(data, password))

    } else {
      Alert.alert("Error", "Nama, email, no. handphone, dan password harus diisi")
    }
  }

  render() {
    const { registerLoading } = this.props;
    const { nama, email, nohp, password } = this.state;
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.btnBack}>
            <Tombol icon='arrow-left'
              onPress={() => this.props.navigation.goBack()} />
          </View>

          <View style={styles.viewPicExplain}>
            <Image source={MyImage} style={styles.image} />
            <Text style={styles.text}>Isi Data Diri Anda</Text>
          </View>
          <View style={styles.viewFieldBox}>
            <View style={styles.viewInputOne}>
              <Text style={styles.textInput}>Nama :</Text>
              <TextInput style={styles.input} onChangeText={(nama) => this.setState({ nama })} />
            </View>
            <View style={styles.viewInput}>
              <Text style={styles.textInput}>Email :</Text>
              <TextInput style={styles.input} onChangeText={(email) => this.setState({ email })} />
            </View>
            <View style={styles.viewInput}>
              <Text style={styles.textInput}>No Handphone :</Text>
              <TextInput style={styles.input} onChangeText={(nohp) => this.setState({ nohp })} keyboardType="number-pad"/>
            </View>
            <View style={styles.viewInput}>
              <Text style={styles.textInput}>Password :</Text>
              <TextInput style={styles.input} onChangeText={(password) => this.setState({ password })} secureTextEntry />
            </View>
            <Jarak height={10} />
            <View style={styles.button}>
              <Tombol
                title="Continue"
                type="textIcon"
                icon="submit"
                padding={7}
                fontSize={16}
                onPress={() => this.onContinue()}
                loading={registerLoading}
              />
            </View>

          </View>
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  registerLoading: state.AuthReducer.registerLoading,
  registerResult: state.AuthReducer.registerResult,
  registerError: state.AuthReducer.registerError,
});

export default connect(mapStateToProps, null)(Register);

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white
  },
  btnBack: {
    marginLeft: 30,
    marginTop: 20,
    position: 'absolute',
  },
  viewControlPage: {
    marginBottom: responsiveWidth(20),
  },
  viewPicExplain: {
    // marginLeft: responsiveWidth(75),
    marginTop: responsiveHeight(70),
    alignItems: 'center',
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
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 10,
    elevation: 3,
    backgroundColor: 'white',
  },
  image: {
    alignSelf: 'center',
    width: responsiveWidth(230),
    height: responsiveHeight(160),
  },
  text: {
    // marginLeft: responsiveWidth(45),
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
    height: responsiveHeight(60)
  },
  viewInput: {
    marginTop: responsiveWidth(10),
  },
  viewInputOne: {
    marginTop: responsiveWidth(20),
  },
  button: {
    marginTop: 10,
    marginLeft: 29,
    marginRight: 29,
    marginBottom: 20,
    height: responsiveHeight(60),
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: responsiveWidth(105),
    marginTop: responsiveWidth(10),
  },
});
