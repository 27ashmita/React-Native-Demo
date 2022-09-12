import React, {useState, useCallback} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import {AppButton} from '../../../components/Button';
import * as ImagePicker from 'react-native-image-picker';

import {ImagePickerHeader} from '../../ImagePickerHeader';
import {ImagePickerModal} from '../../ImagePickerModal';
import {ImagePickerAvatar} from '../../ImagePickerAvatar';

export const Settings = ({ navigation }) => {
  const [pickerResponse, setPickerResponse] = useState(null);
  const [visible, setVisible] = useState(false);

  const onImageLibraryPress = useCallback(() => {
    const options = {
      selectionLimit: 1,
      mediaType: 'photo',
      includeBase64: false,
    };
    ImagePicker.launchImageLibrary(options, setPickerResponse);
  }, []);

  const onCameraPress = useCallback(() => {
    const options = {
      saveToPhotos: true,
      mediaType: 'photo',
      includeBase64: false,
    };
    ImagePicker.launchCamera(options, setPickerResponse);
  }, []);

  const uri = pickerResponse?.assets && pickerResponse.assets[0].uri;

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
      <View style={{
          flex: 2,
          backgroundColor: 'white',
          borderRadius: 8,
          margin: 8,
          marginTop: -20,
        }}>
        {/* <ImagePickerHeader /> */}
        <ImagePickerAvatar uri={uri} onPress={() => setVisible(true)} />
        <ImagePickerModal
          isVisible={visible}
          onClose={() => setVisible(false)}
          onImageLibraryPress={onImageLibraryPress}
          onCameraPress={onCameraPress}
        />
      
      <View style={{marginTop: 10}}>
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
            padding: 16,
          }}>
          ※ ニックネームは後から変更できます ※ 4 〜 20文字以内
        </Text>
        <AppButton
          title="設定する"
          size="sm"
          backgroundColor="#FFE100"
          color="black"
          style={{margin: 10}}
          onPress={() => navigation.navigate('Guide')}
        />
      </View>
      </View>
      {/* </View> */}
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
    marginTop: 42,
  },
  screen: {
    flex: 1,
    backgroundColor: '#f2f2fC',
  },
});