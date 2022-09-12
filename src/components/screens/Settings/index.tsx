import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import AppButton from '../../../components/Button';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const logo = require('../../../../assets/Login/q.png');

const Settings = () => {
  return (
    <SafeAreaView style={styles.containerView}>
      <View style={{flex: 1, backgroundColor: 'green'}}>
        <Text
          style={{
            color: 'white',
            marginTop: 54,
            alignSelf: 'center',
            fontSize: 20,
          }}>
          ようこそ Golf in One へ
        </Text>
        <View></View>
      </View>
      <View
        style={{
          flex: 2,
          backgroundColor: 'white',
          borderRadius: 8,
          margin: 8,
          marginTop: -32,
        }}>
        <View
          style={{
            width: 200,
            height: 200,
            alignSelf: 'center',
            marginTop: -100,
          }}>
          <Image
            source={logo}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              alignSelf: 'center',
              width: 200,
              height: 200,
              borderRadius: 100,
            }}
          />
          <TouchableOpacity
            // onPress={addImage}
            style={styles.uploadBtn}>
            <Text>Upload Image</Text>
          </TouchableOpacity>
        </View>
        <View style={{marginTop: 16}}>
          <TextInput
            placeholder="ニックネーム"
            autoCapitalize="none"
            keyboardType="email-address"
            autoCorrect={false}
            wrapperStyles={styles.emailInput}
            style={styles.textInput}
          />
          <Text
            style={{
              color: 'black',
              alignSelf: 'center',
              fontSize: 20,
              padding: 16
            }}>
            ※ ニックネームは後から変更できます ※ 4 〜 20文字以内
          </Text>
          <AppButton
            title="設定する"
            size="sm"
            backgroundColor="#FFE100"
            color="black"
            style={{margin: 10}}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  containerView: {
    flex: 1,
    backgroundColor: 'grey',
  },
  uploadBtnContainer: {
    opacity: 0.7,
    position: 'absolute',
    right: 0,
    bottom: 0,
    backgroundColor: 'lightgrey',
    width: '100%',
    height: '25%',
  },
  uploadBtn: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'red',
    alignSelf: 'center',
    height: 50,
    borderRadius: 16,
  },
  textInput: {
    alignItems: 'center',
    padding: 16,
    margin: 10,
    borderColor: '#cccccc',
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: 'white',
    marginTop: 42
  }
});

export default Settings;
