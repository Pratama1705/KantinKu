import { Text, StyleSheet, View, ScrollView, Image, Alert } from 'react-native'
import React, { Component } from 'react'
import { colors, fonts, getData, responsiveHeight, responsiveWidth } from '../utils'
import { Inputan, Tombol } from '../components'
import { connect } from 'react-redux'
import { DefaultImage } from '../assets'
import { launchImageLibrary } from 'react-native-image-picker'
import { updateProfile } from '../actions/ProfileAction'

class EditProfile extends Component {
  constructor(props) {
    super(props)

    this.state = {
      uid: '',
      nama: '',
      email: '',
      nohp: '',
      avatar: false,
      avatarForDB: '',
      avatarLama: '',
      updateAvatar: false,
    }
  }

  componentDidMount() {
    this.getUserData();
  }

  componentDidUpdate(prevProps) {
    const { updateProfileResult } = this.props

    if(updateProfileResult && prevProps.updateProfileResult !== updateProfileResult) {
      Alert.alert("Sukses", "Update Profile Success");
      this.props.navigation.replace("MainApp")
    }
  }

  getUserData = () => {
    getData('user').then((res) => {
      const data = res;
      this.setState({
        uid: data.uid,
        nama: data.nama,
        email: data.email,
        nohp: data.nohp,
        avatar: data.avatar,
        avatarLama: data.avatar
      });
    });
  };

  getImage = () => {
    launchImageLibrary(
      { quality: 1, maxWidth: 500, maxHeight: 500, includeBase64: true, selectionLimit: 1, cameraType: 'front' },
      (response) => {
        // console.log("responsnya :", response)
        if (response.didCancel || response.errorCode || response.errorMessage) {
          Alert.alert('Error', 'Maaf sepertinya anda tidak memilih fotonya');
        } else {
          const source = response.assets[0].uri;
          const fileString = `data:${response.assets[0].type};base64,${response.assets[0].base64}`;

          this.setState({
            avatar: source,
            avatarForDB: fileString,
            updateAvatar: true
          });
        }
      },
    );
  };

  onSubmit = () => {
    const {
      nama,
      nohp,
    } = this.state;
    if (nama && nohp) {
      //dispatch update
      this.props.dispatch(updateProfile(this.state))

    } else {
      Alert.alert("Error", "Nama & No. HP harus diisi")
    }
  };

  render() {
    const { nama, email, nohp, avatar } = this.state;
    const { updateProfileLoading } = this.props;
    return (
      <View style={styles.pages}>
        <View>
          <Inputan label={"Nama"} value={nama} onChangeText={(nama) => this.setState({ nama })} />
          <Inputan label={"Email"} value={email} disabled />
          <Inputan label={"No. Handphone"} value={nohp} onChangeText={(nohp) => this.setState({ nohp })} keyboardType="number-pad" />

          <View style={styles.InputFoto}>
            <Text style={styles.label}>
              Foto Profile
            </Text>
            <View style={styles.wrapperUpload}>
              <Image source={avatar ? { uri: avatar } : DefaultImage} style={styles.foto} />

              <View style={styles.tombolChangePhoto}>
                <Tombol title="Change Photo" type="text" padding={7} onPress={() => this.getImage()} />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.submit}>
          <Tombol title="Submit" type="textIcon" icon="submit" padding={responsiveHeight(15)} fontSize={18} loading={updateProfileLoading} onPress={() => this.onSubmit()} />
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  updateProfileLoading: state.ProfileReducer.updateProfileLoading,
  updateProfileResult: state.ProfileReducer.updateProfileResult,
  updateProfileError: state.ProfileReducer.updateProfileError,
});

export default connect(mapStateToProps, null)(EditProfile);

const styles = StyleSheet.create({
  pages: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 30,
    marginTop: 10,
    justifyContent: 'space-between'
  },

  InputFoto: {
    marginTop: 20
  },

  label: {
    fontSize: 18,
    fontFamily: fonts.primary.regular
  },

  foto: {
    width: responsiveWidth(150),
    height: responsiveWidth(150),
    borderRadius: 40
  },

  wrapperUpload: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center'
  },

  tombolChangePhoto: {
    marginLeft: 20,
    flex: 1
  },
  submit: {
    marginVertical: 30
  }
})