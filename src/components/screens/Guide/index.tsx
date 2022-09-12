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

const logo = require('../../../../assets/Login/icon_flag..png');

const Guide = () => {
  return (
    <SafeAreaView style={styles.containerView}>
      <Image
        source={logo}
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          padding: 10,
          resizeMode: 'contain',
          alignSelf: 'center',
          marginTop: 54,
        }}
      />
      <Text
        style={{
          color: 'white',
          alignSelf: 'center',
          fontSize: 20,
          padding: 16,
          marginTop: 12,
        }}>
        Golf in One にご登録いただき ありがとうございます！！
      </Text>
      <View style={{margin: 16}}>
      <AppButton title="アプリの使い方の動画を見る" size="sm" backgroundColor="#FFE100" margin='10'/>
      <View
        style={{
          backgroundColor: 'white',
          borderRadius: 12,
          height: 200,
          marginTop: 12,
          marginBottom: 12
        }}>
          <WebView
         source = {{ uri:
         'https://www.youtube.com/embed/qZVTkn2NjS0' }}
         style = {{flex:1, borderRadius: 8}}
         domStorageEnabled={true}
         javaScriptEnabled={true}
         />
        </View>
        <AppButton title="後で見る" size="sm" backgroundColor="white" margin='10'/>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  containerView: {
    flex: 1,
    backgroundColor: 'green',
  },
});

export default Guide;