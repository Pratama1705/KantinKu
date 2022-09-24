import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { colors, fonts } from '../../utils'

const Inputan = ({ textarea, width, height, fontSize, label, value, secureTextEntry }) => {
  if (textarea) {
    return (
      <View style={styles.container}>
        <Text style={styles.label(fontSize)}>{label} :</Text>
        <TextInput style={styles.inputTextArea(fontSize)} multiline={true} numberOfLines={3} value={value}
        />
      </View>
    )
  }
  return (
    <View style={styles.container}>
      <Text style={styles.label(fontSize)}>{label} :</Text>
      <TextInput style={styles.input(width, height, fontSize)} value={value} secureTextEntry={secureTextEntry} />
    </View>
  )
}

export default Inputan

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
  },
  label: (fontSize) => ({
    fontSize: fontSize ? fontSize : 18,
    fontFamily: fonts.primary.regular,
    color: colors.black,
  }),
  input: (width, height, fontSize) => ({
    fontSize: fontSize ? fontSize : 18,
    fontFamily: fonts.primary.regular,
    width: width,
    height: height,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: colors.border,
    paddingHorizontal: 10,
    paddingVertical: 1,
  }),
  inputTextArea: (fontSize) => ({
    fontSize: fontSize ? fontSize : 18,
    fontFamily: fonts.primary.regular,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: colors.border,
    paddingHorizontal: 10,
    paddingVertical: 2,
    textAlignVertical: 'top',
  }),
});