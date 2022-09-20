import React, { Component } from 'react';
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
import {
  FacebookSocialButton,
  AppleSocialButton,
  TwitterSocialButton,
} from 'react-native-social-buttons';

const logo = require('../../../../assets/Login/GIO-logo-green.png');

const Login = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.containerView}>
      <View style={{flex: 1}}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Image
            source={logo}
            style={{
              height: 110,
              justifyContent: 'center',
              alignItems: 'center',
              padding: 10,
              resizeMode: 'center',
            }}
          />
        </View>
        <AppleSocialButton
          style={{margin: 10}}
          onPress={() => {}}
          buttonViewStyle={styles.buttonViewStyle}
          logoStyle={styles.logoStyle}
          textStyle={styles.textStyle}
        />
        <FacebookSocialButton
          style={{margin: 10}}
          onPress={() => {}}
          buttonViewStyle={styles.buttonViewStyle}
          logoStyle={styles.logoStyle}
          textStyle={styles.textStyle}
        />
        <TwitterSocialButton
          style={{margin: 10}}
          onPress={() => {}}
          buttonViewStyle={styles.buttonViewStyle}
          logoStyle={styles.logoStyle}
          textStyle={styles.textStyle}
        />
        <TextInput
          placeholder="Email"
          autoCapitalize="none"
          keyboardType="email-address"
          autoCorrect={false}
          wrapperStyles={styles.emailInput}
          style={styles.textInput}
        />
        <TextInput
          placeholder="Password"
          autoCapitalize="none"
          keyboardType="default"
          autoCorrect={false}
          wrapperStyles={styles.emailInput}
          style={styles.textInput}
        />
        <View style={styles.screenContainer}>
          <AppButton title="サインイン" size="sm" backgroundColor="#FFE100" onPress={() => navigation.navigate('Settings')}/>
          <TouchableOpacity
            style={{
              alignItems: 'center',
              marginTop: 12,
            }}
            onPress={() => navigation.navigate('Register')}
            >
            <Text style={{color: 'white'}}>パスワードをお忘れの方</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.bottomView}>
          <Text>既にアカウントをお持ちの方はログイン</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  containerView: {
    flex: 1,
    backgroundColor: 'green',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  backgroundStyle: {
    backgroundColor: 'red',
  },
  wrapper: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
  scroll: {
    width: '100%',
  },
  scrollContainer: {
    alignItems: 'center',
    paddingBottom: 30,
  },
  textInput: {
    alignItems: 'center',
    padding: 16,
    margin: 10,
    borderColor: '#cccccc',
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: 'white',
  },
  screenContainer: {
    justifyContent: 'center',
    padding: 10,
  },
  buttonViewStyle: {
    justifyContent: 'center',
    margin: 10,
    width: '95%',
    alignSelf: 'center',
    height: 50,
    borderRadius: 25,
  },
  logoStyle: {},
  textStyle: {},
  bottomView: {
    backgroundColor: 'white',
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    marginBottom: 83,
    marginTop: 100,
  },
});

export default Login;